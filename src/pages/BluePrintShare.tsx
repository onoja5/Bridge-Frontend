import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

interface BlueprintData {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  careerBlueprint: {
    structuredJson: {
      careerVision: string;
    };
  };
}

const BluePrintShare: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const [data, setData] = useState<BlueprintData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlueprint = async () => {
      try {
        // https://bridge-ai-backend-cagfd2exh5h6gwgs.westeurope-01.azurewebsites.net
        const response = await axios.get<BlueprintData>(
          `https://bridge-ai-backend-cagfd2exh5h6gwgs.westeurope-01.azurewebsites.net/users/${id}/blueprint/shared-blueprint`
        );
        setData(response.data);
      } catch (err) {
        setError('⚠️ Failed to load blueprint. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlueprint();
    else {
      setError('❌ Missing user ID in the URL');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="text-center mt-20 text-lg text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-600 font-semibold">{error}</div>;
  }

  if (!data) return null;

  const fullName = `${data.firstName} ${data.lastName}`;
  const vision = data.careerBlueprint?.structuredJson?.careerVision || 'No career vision provided.';

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl space-y-8">
        <div className="flex items-center space-x-6">
          <img
            src={`https://ui-avatars.com/api/?name=${data.firstName}+${data.lastName}&background=random&size=128`}
            alt={`${fullName} avatar`}
            className="w-20 h-20 rounded-full border-2 border-purple-300 shadow"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>
            <p className="text-sm text-gray-500">{data.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Career Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed">{vision}</p>
        </div>
      </div>
    </div>
  );
};

export default BluePrintShare;
