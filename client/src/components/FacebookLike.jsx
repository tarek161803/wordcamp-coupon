import facebook from '../assets/images/facebook.png';
import likeBlue from '../assets/images/thumbs-up.png';

const FacebookLike = () => {
    const handleFacebookLike = () => {
        window.open('https://www.facebook.com/webappick', '_blank');
    };

    return (
        <div className="bg-gray-50 rounded-xl p-4 mt-6 flex items-center gap-3">
            <div className="h-20 w-20 bg-white flex justify-center items-center rounded-lg">
                <img className="w-12" src={facebook} alt="facebook logo" />
            </div>
            <div className="-mt-1">
                <h3 className="mb-1 text-gray-800 text-lg font-semibold">
                    Like Our Facebook Page
                </h3>
                <button
                    onClick={handleFacebookLike}
                    className="flex items-center gap-2 border border-blue-500 px-2 py-1 rounded-lg "
                >
                    <img className="h-5" src={likeBlue} alt="like" />
                    <span>Like</span>
                </button>
            </div>
        </div>
    );
};

export default FacebookLike;
