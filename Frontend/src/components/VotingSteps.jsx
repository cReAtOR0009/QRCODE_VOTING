import React from 'react'

const VotingSteps = () => {
  
    return (
        <div className={`{styles.container} bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
              How to Vote
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl hover:shadow-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Get Your QR Code
                </h3>
                <p className="text-gray-600">
                  Pick up a QR code from the media stand at the entrance before
                  sitting. If you miss it, get it when you’re ready to vote.
                </p>
              </div>
    
              {/* Step 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl hover:shadow-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Fill in Your Information
                </h3>
                <p className="text-gray-600">
                  Enter your name, phone number, faculty, department, level, and
                  your choices for the best faculty and departmental performances.
                </p>
              </div>
    
              {/* Step 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl hover:shadow-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Scan the QR Code
                </h3>
                <p className="text-gray-600">
                  Use your phone’s camera to scan the QR code you received.
                </p>
              </div>
    
              {/* Step 4 */}
              <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl hover:shadow-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Cast Your Vote
                </h3>
                <p className="text-gray-600">
                  After filling in all the required information and scanning the QR
                  code, click the <span className="font-bold">"Cast Vote"</span> button.
                </p>
              </div>
    
              {/* Step 5 */}
              <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl hover:shadow-blue-600">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                  5
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Note: One Vote Per Participant
                </h3>
                <p className="text-gray-600">
                  Voting can only be done once. Make sure all your information is
                  correct before submitting.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default VotingSteps