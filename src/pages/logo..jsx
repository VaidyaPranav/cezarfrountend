export default function About() {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12">

                {/* HOD SECTION */}
                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border border-white/20">
                    <img
                        src="/hod.png"
                        alt="HOD"
                        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl object-cover border-4 border-purple-400 shrink-0 flex-shrink"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Dr. S.Suresh Kumar</h2>
                        <p className="text-purple-300 font-medium mt-2 text-base sm:text-lg">Head of Department</p>
                        <p className="mt-4 text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                            Convenor, Head of the Department IT.
                        </p>
                    </div>
                </section>

                {/* FEST CARD */}
                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
                        <img
                            src="/logo2.png"
                            alt="CEZAR 2026 Logo"
                            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain rounded-2xl sm:rounded-3xl border-4 border-purple-400 shrink-0"
                        />
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">About CEZAR 2026</h2>
                            <p className="text-purple-100 text-xs sm:text-sm lg:text-base leading-relaxed">
                                JNTUH College of Engineering Jagtial, established in 2007, is a constituent college of Jawaharlal Nehru Technological University Hyderabad and is recognized by the UGC. CEZAR 2026 reflects the institution's commitment to developing globally competent engineers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FACULTY CARDS */}
                <section>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">Faculty Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/20 hover:border-purple-400/50 transition">
                                <img src={`/faculty${i}.jpg`} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-4 border-purple-400"/>
                                <h3 className="font-semibold text-base sm:text-lg">Faculty Name</h3>
                                <p className="text-gray-300 text-xs sm:text-sm mt-1">Role / Responsibility</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* COORDINATORS */}
                <section className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">Fest Coordinators</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-200">
                        <div>
                            <p className="font-bold text-base sm:text-lg text-white mb-3">Main Coordinators</p>
                            <div className="space-y-2 text-xs sm:text-sm">
                                <p>P.RAMVISHWAJITHIN <span className="text-purple-300">9573878001</span></p>
                                <p>K.GOPI CHANDU <span className="text-purple-300">9381258872</span></p>
                                <p>U.SRAVANI <span className="text-purple-300">6300766407</span></p>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-base sm:text-lg text-white mb-3">Technical Coordinators</p>
                            <div className="space-y-3 text-xs sm:text-sm">
                                {[
                                    { title: "Project Expo", contacts: ["G.PavanKarthik 8555985891", "D.Gouthami 7569644162"] },
                                    { title: "Code-a-thon", contacts: ["T.Arun Kumar 7013438187", "M.Slikitha 6305276992"] },
                                    { title: "Quiz-Divas", contacts: ["N.Sai Deepak 6302673958", "T.Manvitha 7993568957"] },
                                    { title: "Vishleshan", contacts: ["Ch.Sai Sri 9700456333", "R.Sandeep 7893079954"] }
                                ].map((coord) => (
                                    <div key={coord.title}>
                                        <p className="font-medium text-white">{coord.title}</p>
                                        <div className="ml-2 space-y-1">
                                            {coord.contacts.map((c) => <p key={c} className="text-purple-300">{c}</p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-base sm:text-lg text-white mb-3">Sports Coordinators</p>
                            <div className="space-y-3 text-xs sm:text-sm">
                                {[
                                    { title: "Cricket", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Badminton", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Football", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Volleyball", contacts: ["Name 9999999999", "Name 9999999999"] }
                                ].map((coord) => (
                                    <div key={coord.title}>
                                        <p className="font-medium text-white">{coord.title}</p>
                                        <div className="ml-2 space-y-1">
                                            {coord.contacts.map((c) => <p key={c} className="text-purple-300">{c}</p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div>
                            <p className="font-bold text-base sm:text-lg text-white mb-3">Sports Coordinators</p>
                            <div className="space-y-3 text-xs sm:text-sm">
                                {[
                                    { title: "Cricket", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Badminton", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Football", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Volleyball", contacts: ["Name 9999999999", "Name 9999999999"] }
                                ].map((coord) => (
                                    <div key={coord.title}>
                                        <p className="font-medium text-white">{coord.title}</p>
                                        <div className="ml-2 space-y-1">
                                            {coord.contacts.map((c) => <p key={c} className="text-purple-300">{c}</p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div>
                            <p className="font-bold text-base sm:text-lg text-white mb-3">Sports Coordinators</p>
                            <div className="space-y-3 text-xs sm:text-sm">
                                {[
                                    { title: "Cricket", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Badminton", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Football", contacts: ["Name 9999999999", "Name 9999999999"] },
                                    { title: "Volleyball", contacts: ["Name 9999999999", "Name 9999999999"] }
                                ].map((coord) => (
                                    <div key={coord.title}>
                                        <p className="font-medium text-white">{coord.title}</p>
                                        <div className="ml-2 space-y-1">
                                            {coord.contacts.map((c) => <p key={c} className="text-purple-300">{c}</p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
