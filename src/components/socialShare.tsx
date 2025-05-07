import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';

interface SocialShareProps {
  title: string;
  description: string;
  url: string;
  onClose: () => void;
}

const SocialShare: React.FC<SocialShareProps> = ({
  title,
  description,
  url,
  onClose,
}) => {
  const shareData = {
    title,
    text: description,
    url,
  };

  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleSocialShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 w-96'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg'>
            Share <b>{title}</b>
          </h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            ✕
          </button>
        </div>

        <div className='space-y-4'>
          {/* Native Share Button */}
          {typeof navigator.share === 'function' && (
            <button
              onClick={handleNativeShare}
              className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Share via...
            </button>
          )}

          {/* Social Media Buttons */}
          <div className='grid grid-cols-4 gap-2'>
            <button
              onClick={() => handleSocialShare('twitter')}
              className='flex items-center justify-center p-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-opacity-90 transition-colors'
            >
              <FaTwitter size={20} />
            </button>
            <button
              onClick={() => handleSocialShare('linkedin')}
              className='flex items-center justify-center p-3 bg-[#0077B5] text-white rounded-lg hover:bg-opacity-90 transition-colors'
            >
              <FaLinkedin size={20} />
            </button>
            <button
              onClick={() => handleSocialShare('facebook')}
              className='flex items-center justify-center p-3 bg-[#4267B2] text-white rounded-lg hover:bg-opacity-90 transition-colors'
            >
              <FaFacebook size={20} />
            </button>
            <button
              onClick={copyToClipboard}
              className='flex items-center justify-center p-3 bg-gray-600 text-white rounded-lg hover:bg-opacity-90 transition-colors'
            >
              <FaLink size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
