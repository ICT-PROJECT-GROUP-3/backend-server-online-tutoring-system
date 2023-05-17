import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';
import { BiMaleFemale } from 'react-icons/bi';
import { HiFilter } from 'react-icons/hi';
import Search from '../../components/pagecomponents/find_tutor/search';
import TutorCard from '../../components/pagecomponents/find_tutor/tutor-card';
import Background from '../../components/shared/background/background';
import SideFooter from '../../components/shared/footer/side-footer';
import { fetchData } from './connect';

const FindTutor = () => {
  const [tutorData, setTutorData] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchData().then((tutor) => {
      console.log(tutor);
      setTutorData(tutor);
      setFilteredTutors(tutor);
    });
  }, []);

  const handleSearch = (searchTerm, locationTerm) => {
    if (!searchTerm && !locationTerm) {
      setFilteredTutors(tutorData);
      setNoResults(false);
      return;
    }

    const options = {
      includeScore: true,
      keys: ['area_of_expertise', 'location'],
    };

    const fuse = new Fuse(tutorData, options);
    let filteredResults = tutorData;

    if (searchTerm) {
      const searchResults = fuse.search(searchTerm);
      filteredResults = searchResults
        .filter((result) => result.score < 0.3) // Adjust the threshold as needed
        .map((result) => result.item);
    }

    if (locationTerm) {
      filteredResults = filteredResults.filter(
        (tutor) =>
          tutor.location &&
          tutor.location.toLowerCase().includes(locationTerm.toLowerCase())
      );
    }

    if (filteredResults.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    setFilteredTutors(filteredResults);
  };

  return (
    <Background>
      <div className="flex flex-col">
        <div className="flex flex-row w-screen h-full">
          <div className="w-1/5">
            <div className="w-96 h-screen fixed pt-16 bg-[#f4f3f2] border-t-0 border-r-[1.5px] border-b-0 border-l-0 border-[#e5e3df]/80 -z-10">
              <div className="flex flex-col items-center justify-center w-auto mx-auto my-8">
                <div className="flex flex-col justify-start w-4/5">
                  <div className="flex flex-row items-center mb-4">
                    <HiFilter className="fill-[#f4ab4e] w-8 h-8 mr-4" />
                    <h2 className="text-3xl text-left text-[#1c1c1c]">
                      Filter
                    </h2>
                  </div>
                  <div>
                    <div className="flex flex-row items-center my-2">
                      <BiMaleFemale className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
                      <h2 className="text-lg text-left text-[#1c1c1c]">
                        Gender
                      </h2>
                    </div>
                    <div>
                      <div className="flex items-center my-2 ml-12">
                        <input
                          checked
                          id="male-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 accent-[#F4E4D2] text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="male-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center my-2 ml-12">
                        <input
                          checked
                          id="female-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 accent-[#F4E4D2] text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="female-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Female
                        </label>
                      </div>
                      <div className="flex items-center my-2 ml-12">
                        <input
                          checked
                          id="other-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 accent-[#F4E4D2] text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="other-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center my-2">
                      <BiMaleFemale className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
                      <h2 className="text-lg text-left text-[#1c1c1c]">
                        Price
                      </h2>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value="40"
                      className="fill-[#F4E4D2]"
                    />
                  </div>
                </div>
                <SideFooter />
              </div>
            </div>
          </div>
          <div className="flex flex-col content-center w-4/5 pt-16">
            <Search handleSearch={handleSearch} />

            <div className="grid content-start w-auto grid-cols-1 gap-8 p-2 justify-items-center">
              {/*Search result here */}

              {/* Map tutors over here */}

              {noResults ? (
                <div>No Results</div>
              ) : (
                filteredTutors.map((tutor) => (
                  <TutorCard
                    key={tutor._id}
                    bio={tutor.bio}
                    fullname={tutor.fullname}
                    area_of_expertise={tutor.area_of_expertise}
                    total_teaching_experience={tutor.total_teaching_experience}
                    rating={tutor.rating}
                    price={tutor.price}
                    languages={tutor.languages}
                    subjects={tutor.subjects}
                    location={tutor.location}
                    education_qualifications={tutor.education_qualifications}
                    session_duration={tutor.session_duration}
                    weeklyAvailability={tutor.weekly_availability}
                    timeSlots={tutor.time_slots}
                    maximum_number_of_sessions={
                      tutor.maximum_number_of_sessions
                    }
                    homework_help={tutor.homework_help}
                    can_travel={tutor.can_travel}
                    phone_number={tutor.phone_number}
                    email={tutor.email}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default FindTutor;
