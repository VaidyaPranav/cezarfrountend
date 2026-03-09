export default function About() {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12">

                {/* HOD SECTION */}
                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border border-white/20">
                    <img
                        src="/hod.png"
                        alt="Dr. S.Suresh Kumar - Head of Department"
                        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl object-cover border-4 border-purple-400 shrink-0"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Dr.S.Suresh Kumar</h2>
                        <p className="text-purple-300 font-semibold mt-2 text-lg sm:text-xl"> Associate Professor</p>
                        <p className="text-purple-300 font-semibold mt-2 text-lg sm:text-xl"> Head of Department (IT)</p>
                        <p className="mt-4 text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                            Convenor and Head of the Department of Information Technology
                        </p>
                    </div>
                </section>

                {/* ABOUT FEST */}
                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
                        <img
                            src="/logo2.png"
                            alt="CEZAR 2026 Logo"
                            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain rounded-xl border-4 border-purple-400 shrink-0"
                        />
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">About CEZAR 2026</h2>
                            <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                                JNTUH College of Engineering, Jagtial, established in 2007, is a constituent college of Jawaharlal Nehru Technological University Hyderabad and is recognized by the UGC. CEZAR 2026 reflects our institution's commitment to developing globally competent engineers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FACULTY TEAM */}
                                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">Faculty Coordinators</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                                        {[  { name: "Mr. S. Shashikanth", role: "Assistant Professor(C), Department of IT", responsibility: "Co-Ordinator of Cultural Event", image: "shashikanthsir.jpg" },
                                            { name: "Miss. Samreen Sulthana", role: "Assistant Professor(C), Department of IT", responsibility: " faculty Co-Ordinator", image: "samreen mam.jpg" },
                                            
                                            { name: "Mr. S. Kumara Swamy", role: "Assistant Professor(C), Department of IT", responsibility: "Co-Ordinator of Discipline", image: "kumarsir.jpg" },
                                            { name: "Mr. B. Rajesh", role: "Assistant Professor(C), Department of IT", responsibility: "Co-Ordinator of Technical Event", image: "rajesh .jpg" },
                                            { name: "Mr. T. Rajashekar", role: "Assistant Professor(C), Department of IT", responsibility: "Co-Ordinator of Finance", image: "rajashekar.jpeg" },
                                            { name: "Mr. B. Madhukar", role: "Assistant Professor(C), Department of IT", responsibility: "Co-Ordinator of Web Designing and Printing", image: "madhukar sir.jpg" },
                                           
                                            { name: "Miss. D. Latha", role: "Assistant Professor(C), Department of IT", responsibility: "Co-Ordinator of Arts", image: "latha mam.jpg" },
                                            
                                        ].map((faculty, idx) => (
                                            <div key={idx} className="bg-white/5 rounded-lg p-4 sm:p-5 border border-white/10 hover:border-purple-400/30 transition text-center">
                                                <img src={faculty.image} alt={faculty.name} className="w-24 h-27 sm:w-32 sm:h-37 rounded-2xl mx-auto mb-4 object-cover border-4 border-purple-400"/>
                                                <h3 className="font-semibold text-lg sm:text-xl text-white">{faculty.name}</h3>
                                                <p className="text-gray-300 text-xs sm:text-sm mt-2">{faculty.role}</p>
                                                <p className="text-purple-300 font-bold text-xs sm:text-sm mt-3">{faculty.responsibility}</p>
                                            </div>
                                        ))} 
                                    </div>
                                </section>

                                {/* COORDINATORS */}
                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">Student Coordinators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { label: "Main Coordinators", value: "D. Sai Shankar  • 9618341983 \nD. Sahithi  • 8886703567" },
                            { label: "Finance", value: "Mohammed Ubaiduddin  • 7989447767\nCh. Shravya  • 9182736304" },
                            { label: "Technical Team", value: "Anayat Ahmad Bhat  • 6005843877\nV. Pranav • 9652871322\nR. Dhanalaxmi • 7569207359\nPriya Kumari • 7993527492" },
                            { label: "Non-Technical Team", value: "B. Sai Teja • 9392116521\nMD Nasheeroddin • 8712574204\nM. Ashwitha • 8106333718\nM. Thirumala • 9392298221" },
                            { label: "Arts", value: "Ch. Aryan • 9032527114\nA. Indu • 9848575703\nV. Vyshnavi • 9550284714" },
                            { label: "Discipline", value: "N. Venkatesh • 9542098264\nB. Navadeep • 8523051019\nK. Vaishnavi • 9347348449\nR. Mahalaxmi • 9908472040" },
                            { label: "Sports", value: "U. Ajay • 9063973641\nS. Sri Datta • 9014296859\nP. Priyanka • 9849004538" },
                            { label: "Mob", value: "A. Manish Kumar • 7794889437\nD. Siri • 9347425044" },
                            { label: "Cult Night", value: " T. Ramesh • 8309287379\nN. Akhila • 9652013657" },
                            { label: "Anti-Ragging", value: "D. Kiran • 9440444196\nDurga Garule • 7569403445\nB. Saharsha • 6300644565" },
                            { label: "Food", value: " T. Anil • 9347936426\nG. Uday Krishna Reddy • 7386030371\nV. Spurthi • 7989087119" },
                           { label: "Social Media", value: " M. Soumith • 7780229982\nE. Varun Sandesh • 8096790660" },
                            { label: "Stalls", value: "A. Thrilok • 9701642342\nM. Goutham Venkata Sai Krishna • 8309344986" },
                        ].map((coord, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 sm:p-5 border border-white/10 hover:border-purple-400/30 transition">
                                <p className="text-purple-300 font-bold text-sm sm:text-base mb-3">{coord.label}</p>
                                <p className="text-gray-300 text-xs sm:text-sm whitespace-pre-line">{coord.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
