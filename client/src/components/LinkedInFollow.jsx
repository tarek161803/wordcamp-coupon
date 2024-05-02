import linkedin from '../assets/images/linkedin.png';
import plusIcon from '../assets/images/plus.png';

const LinkedInFollow = () => {
    const handleLinkedInFollow = () => {
        window.open('https://bd.linkedin.com/company/webappick', '_blank');
    };
    return (
        <div className="bg-gray-50 rounded-xl p-4 mt-6 flex items-center gap-3">
            <div className="h-20 w-20 bg-white flex justify-center items-center rounded-lg">
                <img className="w-12" src={linkedin} alt="facebook logo" />
            </div>
            <div className="-mt-1">
                <h3 className="mb-1 text-gray-800 text-lg font-semibold">
                    Follow Our LinkedIn Page
                </h3>
                <button
                    onClick={handleLinkedInFollow}
                    className="flex items-center gap-2 border border-blue-500 px-2 py-1 rounded-lg "
                >
                    <img className="h-5" src={plusIcon} alt="like" />
                    <span>Follow</span>
                </button>
            </div>
        </div>
    );
};

export default LinkedInFollow;
