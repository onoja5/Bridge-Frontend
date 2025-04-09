import React, { useState } from 'react';
import { FaEye, FaEdit, FaShareAlt, FaTrash } from 'react-icons/fa'; // Import icons
import { useToast } from '@/hooks/use-toast'; // Import toast hook
import { fetchUserBlueprint } from '@/utils/helper'; // Import helper function
import { useAuthContext } from '@/contexts/AuthContext'; // Import AuthContext
import DeleteConfirmationModal from './DeleteConfirmationModal'; // Import the modal

interface BlueprintFolderProps {
  name: string;
  onDelete: () => void;
  onUpdate: (updatedBlueprint: string) => void; // Pass updated blueprint
  onShare: () => void;
  onView: () => void;
}

const BlueprintFolder: React.FC<BlueprintFolderProps> = ({
  name,
  onDelete,
  onUpdate,
  onShare,
  onView,
}) => {
  const { toast } = useToast(); // Use toast hook
  const { userData } = useAuthContext(); // Get user data from AuthContext
  const userId = userData?._id; // Extract userId from userData

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal

  const handleUpdate = async () => {
    if (!userId) {
      toast({
        title: "Failed to Update Blueprint",
        description: "User ID is not available.",
        variant: "destructive",
      });
      return;
    }

    try {
      const blueprint = await fetchUserBlueprint(userId); // Fetch blueprint
      if (blueprint) {
        toast({
          title: "Blueprint Updated Successfully",
          description: "Your blueprint has been updated.",
          variant: "default",
        });
        onUpdate(blueprint); // Pass the updated blueprint to the parent
      } else {
        throw new Error("Blueprint not found.");
      }
    } catch (error) {
      toast({
        title: "Failed to Update Blueprint",
        description: "Try again.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true); // Open the delete confirmation modal
  };

  const confirmDelete = () => {
    onDelete(); // Trigger the delete callback
    setIsDeleteModalOpen(false); // Close the modal
  };

  return (
    <div className="folder-container relative bg-white p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        {/* Make the file name clickable and add hover effect */}
        <h3
          onClick={onView} // Open blueprint details on click
          className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:duration-300 cursor-pointer"
        >
          {name}
        </h3>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-gray-500 hover:text-gray-800"
        >
          ⋮
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md">
          <button
            onClick={onView}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FaEye className="mr-2" /> View
          </button>
          <button
            onClick={handleUpdate} // Use the new handleUpdate function
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FaEdit className="mr-2" /> Update
          </button>
          <button
            onClick={onShare}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FaShareAlt className="mr-2" /> Share
          </button>
          <button
            onClick={handleDelete} // Open delete confirmation modal
            className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100"
          >
            <FaTrash className="mr-2" /> Delete
          </button>
        </div>
      )}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)} // Close modal
          onConfirm={confirmDelete} // Confirm delete action
          blueprintName={name} // Pass folder name
        />
      )}
    </div>
  );
};

export default BlueprintFolder;