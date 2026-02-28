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
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Dr. S. Suresh Kumar</h2>
                        <p className="text-purple-300 font-semibold mt-2 text-lg sm:text-xl">Head of Department (IT)</p>
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
                <section>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center">Faculty Coordinators</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-white/20 hover:border-purple-400/50 transition">
                                <img src={`/faculty${i}.jpg`} alt={`Faculty ${i}`} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-400"/>
                                <h3 className="font-semibold text-lg sm:text-xl">Faculty Name</h3>
                                <p className="text-gray-300 text-sm mt-2">Role / Responsibility</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* COORDINATORS */}
                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">Student Coordinators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { label: "Main Coordinators", value: "D. Sai Shankar (1216) • 9618341983 \nD. Sahithi (1218) • 8886703567" },
                            { label: "Finance", value: "Mohammed Ubaiduddin (1240) • 7989447767\nCh. Shravya (1214) • 9182736304" },
                            { label: "Technical Team", value: "Anayat Ahmad Bhat (1267) • 6005843877\nV. Pranav (1261) • 9652871322\nR. Dhanalaxmi (12LE5) • 7569207359\nPriya Kumari (12LE4) • 7993527492" },
                            { label: "Non-Technical Team", value: "B. Sai Teja (1211) • 9392116521\nMD Nasheeroddin (1239) • 8712574204\nM. Ashwitha (1238) • 8106333718\nM. Thirumala (1235) • 9392298221" },
                            { label: "Arts", value: "Ch. Aryan (1213) • 9032527114\nA. Indu (1206) • 9848575703\nV. Vyshnavi (1262) • 9550284714" },
                            { label: "Discipline", value: "N. Venkatesh (1244) • 9542098264\nB. Navadeep (1212) • 8523051019\nK. Vaishnavi (1230) • 9347348449\nR. Mahalaxmi (1251) • 9908472040" },
                            { label: "Sports", value: "U. Ajay (1260) • 9063973641\nS. Sri Datta (1253) • 9014296859\nP. Priyanka (1247) • 9849004538" },
                             { label: "Mob", value: "A. Manish Kumar (1202) • 7794889437\nD. Siri (1215) • 9347425044" },
                            { label: "Anti-Ragging", value: "D. Kiran (1217) • 9440444196\nDurga Garule (1220) • 7569403445\nB. Saharsha (1210) • 6300644565" },
                            { label: "Food", value: " T. Anil (1258) • 9347936426\nG. Uday Krishna Reddy (1225) • 7386030371\nV. Spurthi (1265) • 7989087119" },
                           
                            { label: "Stalls", value: "A. Thrilok (1204) • 9701642342\nM. Goutham Venkata Sai Krishna (1233) • 8309344986" },
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
