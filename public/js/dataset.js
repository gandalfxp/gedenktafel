const dataset = [
    {
      "Name": "Estella Agsteribbe",
      "Born": "April 6, 1909",
      "Died": "September 17, 1943",
      "Age": "34",
      "Ethnicity": "Jewish",
      "Notability": "Gymnast. Member of the Gold medal-winning Dutch gymnastics team at the 1928 Summer Olympics."
    },
    {
      "Name": "Heinz Alt",
      "Born": "1922",
      "Died": "January 6, 1945",
      "Age": "22 or 23",
      "Ethnicity": "Jewish",
      "Notability": "Composer. Deported from Theresienstadt concentration camp to Auschwitz on September 28, 1944."
    },
    {
      "Name": "Jan Ančerl",
      "Born": "February 28, 1943",
      "Died": "c. October 15, 1944",
      "Age": "1",
      "Ethnicity": "Jewish",
      "Notability": "Son of Karel Ančerl and Valy Ančerl. Born while parents were in Theresienstadt concentration camp."
    },
    {
      "Name": "Valy Ančerl",
      "Born": "1908",
      "Died": "c. October 15, 1944",
      "Age": "36",
      "Ethnicity": "Jewish",
      "Notability": "Wife of Karel Ančerl, who was also at Auschwitz, but survived."
    },
    {
      "Name": "Count Andreas Pius Cyrill of Zoltowski-Romanus Andreas Pius",
      "Born": "1881",
      "Died": "September 4, 1941",
      "Age": "59",
      "Ethnicity": "Polish",
      "Notability": "Noble."
    },
    {
      "Name": "Norbert Barlicki",
      "Born": "June 6, 1880",
      "Died": "September 27, 1941",
      "Age": "61",
      "Ethnicity": "Polish",
      "Notability": "Lawyer, publicist, and politician."
    },
    {
      "Name": "Count Bernard of Łubieński",
      "Born": "February 23, 1894",
      "Died": "October 10, 1941",
      "Age": "47",
      "Ethnicity": "Polish",
      "Notability": "Noble. Was a member of the Polish Ministry of Commerce and Industrial Affairs before war broke out. Belonged to the first group of people to organise the underground fight."
    },
    {
      "Name": "René Blum",
      "Born": "March 13, 1878",
      "Died": "c. September 1942",
      "Age": "64",
      "Ethnicity": "Jewish",
      "Notability": "Choreographer, founder of the Ballet de l'Opéra; brother of Léon Blum. Transferred to the camp on September 23, 1942."
    },
    {
      "Name": "Hana Brady",
      "Born": "May 16, 1931",
      "Died": "October 23, 1944",
      "Age": "13",
      "Ethnicity": "Jewish",
      "Notability": "Arrived at the camp on October 23, 1944, and was gassed immediately."
    },
    {
      "Name": "Rudolf Brumlík",
      "Born": "December 14, 1899",
      "Died": "May 14, 1944",
      "Age": "44",
      "Ethnicity": "Czechoslovakian",
      "Notability": "Businessman from Prague."
    },
    {
      "Name": "Rosette Wolczak",
      "Born": "March 19, 1928",
      "Died": "November 23, 1943",
      "Age": "15",
      "Ethnicity": "French Jewish",
      "Notability": "Deported from Switzerland for immorality."
    },
    {
      "Name": "Bronisław Czech",
      "Born": "July 25, 1908",
      "Died": "June 4, 1944",
      "Age": "35",
      "Ethnicity": "Polish",
      "Notability": "Skier  -  24 times Polish champion, and participant of Winter Olympics of 1928, 1932 and 1936; soldier of Armia Krajowa."
    },
    {
      "Name": "Lea Deutsch",
      "Born": "March 18, 1927",
      "Died": "May 1943",
      "Age": "16",
      "Ethnicity": "Jewish",
      "Notability": "Child actress. Born Jewish, converted to Roman Catholicism with her family in June 1941 as an attempt by her father to save the family from certain death, but still considered Jewish by Nazi racial laws. Died in the cattle wagon routed to Auschwitz."
    },
    {
      "Name": "Hertha Feiner",
      "Born": "1896",
      "Died": "March 12, 1943",
      "Age": "47",
      "Ethnicity": "Jewish",
      "Notability": "Among last Jewish employees to leave Berlin. Put on train to Auschwitz on March 12, 1943; poisoned herself in transit."
    },
    {
      "Name": "Benjamin Fondane",
      "Born": "November 14, 1898",
      "Died": "October 2, 1944",
      "Age": "45",
      "Ethnicity": "Jewish",
      "Notability": "Poet, critic, existentialist philosopher and author."
    },
    {
      "Name": "Lina Fondane",
      "Born": "1892",
      "Died": "1944",
      "Age": "52",
      "Ethnicity": "Jewish",
      "Notability": "Sister of Benjamin Fondane."
    },
    {
      "Name": "Edith Frank",
      "Born": "January 16, 1900",
      "Died": "January 6, 1945",
      "Age": "44",
      "Ethnicity": "Jewish",
      "Notability": "Mother of Anne Frank;arrested on 4 August 1944; deported to Auschwitz 3 September 1944.she died of weakness and disease"
    },
    {
      "Name": "Miroslav Šalom Freiberger",
      "Born": "January 9, 1903",
      "Died": "May 8, 1943",
      "Age": "40",
      "Ethnicity": "Jewish",
      "Notability": "Head Rabbi of Jewish Municipality of Zagreb, catechist, translator, writer and spiritual leader, educated in law and theology science. On last transport of Jews from Croatia. Killed at camp entrance when he protested against the inhumane procedure that was implemented against the members of his community."
    },
    {
      "Name": "Kurt Gerron",
      "Born": "May 11, 1897",
      "Died": "October 28, 1944",
      "Age": "47",
      "Ethnicity": "Jewish",
      "Notability": "Actor and film director; was either persuaded or coerced by the Nazis to make a propaganda film showing how humane the conditions were at Theresienstadt concentration camp. After filming finished, he was deported on the final transport ever to Auschwitz, on October 28, 1944, and was gassed immediately."
    },
    {
      "Name": "Dora Gerson",
      "Born": "March 23, 1899",
      "Died": "February 14, 1943",
      "Age": "43",
      "Ethnicity": "Jewish",
      "Notability": "Cabaret singer and silent-film actress. Gassed with her husband Max Sluizer and children Miriam Sluizer and Abel Juda Sluizer"
    },
    {
      "Name": "Petr Ginz",
      "Born": "February 1, 1928",
      "Died": "September 28, 1944",
      "Age": "16",
      "Ethnicity": "Jewish",
      "Notability": "Writer. Esperantist."
    },
    {
      "Name": "Ala Gertner",
      "Born": "March 12, 1912",
      "Died": "January 5, 1945",
      "Age": "32",
      "Ethnicity": "Jewish",
      "Notability": "Smuggled gunpowder into the camp to help the Sonderkommando blow up Crematorium IV during an October 7, 1944 revolt. Tortured and eventually executed by hanging along with her three conspirators, the last public hanging at Auschwitz."
    },
    {
      "Name": "Roza Robota",
      "Born": "1921",
      "Died": "January 5, 1945",
      "Age": "23",
      "Ethnicity": "Jewish",
      "Notability": "Smuggled gunpowder into the camp to help the Sonderkommando blow up Crematorium IV during an October 7, 1944 revolt. Tortured and eventually executed by hanging along with her three conspirators, the last public hanging at Auschwitz."
    },
    {
      "Name": "Regina Safirsztajn",
      "Born": "1915",
      "Died": "January 5, 1945",
      "Age": "30",
      "Ethnicity": "Jewish",
      "Notability": "Smuggled gunpowder into the camp to help the Sonderkommando blow up Crematorium IV during an October 7, 1944 revolt. Tortured and eventually executed by hanging along with her three conspirators, the last public hanging at Auschwitz."
    },
    {
      "Name": "Ettie Steinberg",
      "Born": "January 11, 1914",
      "Died": "September 4, 1942",
      "Age": "28",
      "Ethnicity": "Jewish",
      "Notability": "One of few Irish Jews who died in the shoah; gassed with her husband Vogtjeck Gluck and son Leon Gluck"
    },
    {
      "Name": "Pavel Haas",
      "Born": "June 21, 1899",
      "Died": "October 17, 1944",
      "Age": "45",
      "Ethnicity": "Jewish",
      "Notability": "Composer. After arrival at the camp, Josef Mengele was about to send Karel Ančerl to the gas chamber, but weakened Haas, who stood next to him, began to cough and the death sentence was therefore chosen for him instead."
    },
    {
      "Name": "Jane Haining",
      "Born": "June 6, 1897",
      "Died": "August 16, 1944",
      "Age": "47",
      "Ethnicity": "Scottish",
      "Notability": "Scottish missionary working in Hungary since 1932. Arrested by the Nazis in 1944 on charges of espionage and working among Jews while trying to save young Jewish girls. Arrested and sent to prisons in Fő utca and Buda, and then sent to Auschwitz in May 1944, where she was tattooed as prisoner 79467."
    },
    {
      "Name": "Ivana Hirschmann",
      "Born": "May 5, 1866",
      "Died": "May 8, 1943",
      "Age": "77",
      "Ethnicity": "Jewish",
      "Notability": "Croatian first female professor of gymnastics."
    },
    {
      "Name": "Hans Krása",
      "Born": "November 30, 1899",
      "Died": "October 17, 1944",
      "Age": "44",
      "Ethnicity": "Jewish",
      "Notability": "Composer; helped to organize cultural life in Theresienstadt concentration camp."
    },
    {
      "Name": "Viktor Ullmann",
      "Born": "January 1, 1898",
      "Died": "October 18, 1944",
      "Age": "46",
      "Ethnicity": "Jewish",
      "Notability": "Composer, conductor, pianist, teacher, music critic, active in Prague. Deported to Theresienstadt concentration camp on September 8, 1942, where he helped to organize cultural life. Transferred to Auschwitz on October 16, 1944."
    },
    {
      "Name": "Rafael Schächter",
      "Born": "May 25, 1905",
      "Died": "January 1945",
      "Age": "39",
      "Ethnicity": "Jewish",
      "Notability": "Composer, pianist and conductor. Helped to organize cultural life in Theresienstadt concentration camp. Died on the death march."
    },
    {
      "Name": "Etty Hillesum",
      "Born": "January 15, 1914",
      "Died": "November 30, 1943",
      "Age": "29",
      "Ethnicity": "Jewish",
      "Notability": "Diarist and writer."
    },
    {
      "Name": "Lilli Jahn",
      "Born": "March 5, 1900",
      "Died": "c. June 19, 1944",
      "Age": "44",
      "Ethnicity": "Jewish",
      "Notability": "Doctor who gained international fame posthumously following the publication of her letters to her five children which she wrote during her imprisonment in the labor camp Breitenau."
    },
    {
      "Name": "Regina Jonas",
      "Born": "August 3, 1902",
      "Died": "October 12 or\nDecember 12, 1944",
      "Age": "42",
      "Ethnicity": "Jewish",
      "Notability": "First ordained female rabbi in Germany, rabbi at Neue Synagoge in Berlin, killed two months after entering the camp."
    },
    {
      "Name": "Itzhak Katzenelson",
      "Born": "July 1, 1886",
      "Died": "May 1, 1944",
      "Age": "57",
      "Ethnicity": "Jewish",
      "Notability": "Teacher, poet, dramatist; his son Zvi Katzenelson was on the same transport and was killed the same day as Itzhak."
    },
    {
      "Name": "Peter Kien",
      "Born": "January 1, 1919",
      "Died": "c. October 16, 1944",
      "Age": "25",
      "Ethnicity": "Jewish",
      "Notability": "Artist, poet and librettist active in Theresienstadt concentration camp (Terezin), died from infectious disease soon after arrival to Auschwitz on October 16. Wife and parents were on same transport and were killed."
    },
    {
      "Name": "Bereck Kofman",
      "Born": "October 10, 1900",
      "Died": "1943",
      "Age": "42",
      "Ethnicity": "Jewish",
      "Notability": "Hasidic orthodox rabbi, deported to Auschwitz from Drancy internment camp on Convoy No. 12 on July 29, 1942. According to survivor, he was at the camp for one year before his murder by a Kapo on a Shabbat because he refused to work. He was beaten up with a pickax and buried alive. Father of French philosopher Sarah Kofman."
    },
    {
      "Name": "Saint Maximilian Kolbe",
      "Born": "January 8, 1894",
      "Died": "August 14, 1941",
      "Age": "47",
      "Ethnicity": "Polish",
      "Notability": "Saint. Conventual Franciscan friar who volunteered to die in place of Polish Army Sergeant Franciszek Gajowniczek, who was a stranger to him."
    },
    {
      "Name": "Gertrud Kolmar",
      "Born": "December 10, 1894",
      "Died": "March 1943",
      "Age": "48",
      "Ethnicity": "Jewish",
      "Notability": "Writer, used the pen name of Gertrud Kolmar (born Gertrud Käthe Chodziesner)."
    },
    {
      "Name": "Egon Kunerwalder",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "",
      "Notability": "First husband of Stephanie Helbrun (married 1942). Deported to the camp with his wife in December 1943. Threw himself on the electric wire surrounding the camp in 1944."
    },
    {
      "Name": "Tobias Jakobovits",
      "Born": "November 23, 1887",
      "Died": "October 29, 1944",
      "Age": "56",
      "Ethnicity": "Jewish",
      "Notability": "Rabbi, Czech librarian, and historian of Czech-Jewish culture"
    },
    {
      "Name": "Rutka Laskier",
      "Born": "1929",
      "Died": "1943",
      "Age": "14",
      "Ethnicity": "Jewish",
      "Notability": "Teenager who wrote a diary. Her writings were posthumously published. Dubbed the Polish Anne Frank."
    },
    {
      "Name": "Henri Lévy",
      "Born": "June 7, 1883",
      "Died": "August 13, 1942",
      "Age": "59",
      "Ethnicity": "Jewish",
      "Notability": "Rabbi. He was deported on Convoy No. 8 to the camp on July 20, 1942."
    },
    {
      "Name": "Rudolf Levy",
      "Born": "July 15, 1875",
      "Died": "January 1944",
      "Age": "68",
      "Ethnicity": "Jewish",
      "Notability": "Painter and student of Henri Matisse."
    },
    {
      "Name": "Count Mauritz of Potocki",
      "Born": "",
      "Died": "1942",
      "Age": "",
      "Ethnicity": "Polish",
      "Notability": "Noble."
    },
    {
      "Name": "Donat Makijonek",
      "Born": "May 19, 1890",
      "Died": "June 18, 1941",
      "Age": "51",
      "Ethnicity": "Polish",
      "Notability": "World War I ace; KZ Number 16301."
    },
    {
      "Name": "Franceska Mann",
      "Born": "February 4, 1917",
      "Died": "October 23, 1943",
      "Age": "26",
      "Ethnicity": "Jewish",
      "Notability": "Arrived at the camp on October 23, 1943, killed after she stabbed SS Oberscharführer Walter Quakernack and then shot SS Oberscharführer Josef Schillinger (died of wounds) and SS Sergeant Emmerich."
    },
    {
      "Name": "Bernard Natan",
      "Born": "July 14, 1886",
      "Died": "October 1942",
      "Age": "56",
      "Ethnicity": "Jewish",
      "Notability": "Film director and actor and former head of Pathé Film Studios. Arrived at the camp on September 25, 1942, and was killed several weeks later."
    },
    {
      "Name": "Irène Némirovsky",
      "Born": "February 11, 1903",
      "Died": "August 17, 1942",
      "Age": "39",
      "Ethnicity": "Jewish",
      "Notability": "Novelist. She was classified as a Jew under the Nazi racial laws, which did not take into account her conversion to Roman Catholicism."
    },
    {
      "Name": "Michel Epstein",
      "Born": "",
      "Died": "November 6, 1942",
      "Age": "",
      "Ethnicity": "",
      "Notability": "Husband of Irène Némirovsky. Arrived on November 6, 1942, and was gassed immediately."
    },
    {
      "Name": "Józef Noji",
      "Born": "September 8, 1909",
      "Died": "February 15, 1943",
      "Age": "33",
      "Ethnicity": "Polish",
      "Notability": "Track and field athlete and participant of the 1936 Summer Olympics in Berlin. Murdered by the camp's SS guard, allegedly for trying to smuggle a letter."
    },
    {
      "Name": "Felix Nussbaum",
      "Born": "December 11, 1904",
      "Died": "August 9, 1944",
      "Age": "39",
      "Ethnicity": "Jewish",
      "Notability": "Painter (surrealist). Entire family was eventually killed at the camp at different times, with the exception of one brother, who died from exhaustion at Stutthof in December 1944."
    },
    {
      "Name": "Karl Pärsimägi",
      "Born": "May 11, 1902",
      "Died": "July 27, 1942",
      "Age": "40",
      "Ethnicity": "Estonian",
      "Notability": "Painter (Fauvist). Unknown circumstances as to why he was sent to Auschwitz. It may have been his sexuality, or possibly because he was aiding the Resistance, or helping hide Jewish friends."
    },
    {
      "Name": "Saint Grigol Peradze",
      "Born": "September 13, 1899",
      "Died": "December 6, 1942",
      "Age": "43",
      "Ethnicity": "Georgian",
      "Notability": "Saint. Priest, ecclesiastic figure, theologian, historian, Archimandrite, PhD of History, professor."
    },
    {
      "Name": "Marcin Rożek",
      "Born": "November 4, 1885",
      "Died": "May 19, 1944",
      "Age": "58",
      "Ethnicity": "Polish",
      "Notability": "Sculptor and painter. Died of exhaustion in the camp infirmary."
    },
    {
      "Name": "Chaim Rumkowski",
      "Born": "February 27, 1877",
      "Died": "August 28, 1944",
      "Age": "67",
      "Ethnicity": "Jewish",
      "Notability": "Nazi-appointed head of the Judenrat while he lived in the Łódź Ghetto in Poland. He was known to abuse his power, such as by molesting young Jewish women within the ghetto. executed by Jewish Resistance for his actions in the Łódź Ghetto; Family was also killed at the camp."
    },
    {
      "Name": "Roman Rybarski",
      "Born": "July 3, 1887",
      "Died": "March 6, 1942",
      "Age": "54",
      "Ethnicity": "Polish",
      "Notability": "Economist, historian and politician connected with the right-wing National Democracy political camp. Executed by shooting for organizing the resistance movement in the camp."
    },
    {
      "Name": "Erich Salomon",
      "Born": "April 28, 1886",
      "Died": "July 7, 1944",
      "Age": "58",
      "Ethnicity": "Jewish",
      "Notability": "Photographer (news)."
    },
    {
      "Name": "Malva Schalek",
      "Born": "February 18, 1882",
      "Died": "March 24, 1945",
      "Age": "63",
      "Ethnicity": "Jewish",
      "Notability": "Painter. Was transported to the camp on May 18, 1944, and was killed soon afterwards."
    },
    {
      "Name": "Mommie Schwarz",
      "Born": "July 28, 1876",
      "Died": "November 19, 1942",
      "Age": "66",
      "Ethnicity": "Jewish",
      "Notability": "Painter. Killed with his wife Else Berg."
    },
    {
      "Name": "Otto Selz",
      "Born": "February 14, 1881",
      "Died": "August 27, 1943",
      "Age": "62",
      "Ethnicity": "Jewish",
      "Notability": "Psychologist and professor, formulated the first nonassociationist theory of thinking, in 1913."
    },
    {
      "Name": "Lavoslav Singer",
      "Born": "1866",
      "Died": "1942",
      "Age": "76",
      "Ethnicity": "Jewish",
      "Notability": "Known Bjelovar industrialist."
    },
    {
      "Name": "Ludmila Slavíková",
      "Born": "1890",
      "Died": "1943",
      "Age": "53",
      "Ethnicity": "Czech",
      "Notability": "Mineralogist"
    },
    {
      "Name": "Saint Edith Stein",
      "Born": "October 12, 1891",
      "Died": "August 9, 1942",
      "Age": "50",
      "Ethnicity": "German",
      "Notability": "Saint. Philosopher and nun. Born into a Jewish family, considered a Catholic Jew (of Jewish heritage, but baptized and practiced Catholicism, considered Jewish by Nazi racial laws)."
    },
    {
      "Name": "Carlo Taube",
      "Born": "July 4, 1897",
      "Died": "October 1, 1944",
      "Age": "47",
      "Ethnicity": "Jewish",
      "Notability": "Composer, conductor and pianist. From Galicia, active in Prague. Taube, his wife Erika and their child were deported from Prague to Theresienstadt concentration camp on December 10, 1941. They were deported to Auschwitz on October 1, 1944, where all three were killed immediately."
    },
    {
      "Name": "Erika Taube",
      "Born": "1913",
      "Died": "October 1, 1944",
      "Age": "30",
      "Ethnicity": "Jewish",
      "Notability": "Wife of Carlo Taube."
    },
    {
      "Name": "Tadeusz Tański",
      "Born": "March 11, 1892",
      "Died": "March 23, 1941",
      "Age": "49",
      "Ethnicity": "Polish",
      "Notability": "Automobile engineer and the designer of the first Polish serially-built automobile, the CWS T-1. Arrested on July 3, 1940, and sent to the camp."
    },
    {
      "Name": "Maurice Perl",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "Father of Gisella Perl. Brought his prayer book into the gas chamber."
    },
    {
      "Name": "Barend Dresden-Polak",
      "Born": "May 14, 1908",
      "Died": "November 30, 1944",
      "Age": "36",
      "Ethnicity": "Jewish",
      "Notability": "Husband of Anna Dresden-Polak and father of Eva Dresden, both of whom were killed at Sobibor on July 23, 1943."
    },
    {
      "Name": "Estusia Wajcblum",
      "Born": "",
      "Died": "January 5, 1945",
      "Age": "",
      "Ethnicity": "",
      "Notability": "Smuggled gunpowder into the camp to help the Sonderkommando blow up Crematorium IV during an October 7, 1944 revolt. Tortured and eventually executed by hanging along with her three conspirators, the last public hanging at Auschwitz."
    },
    {
      "Name": "Froukje Esther Waterman-Hollander",
      "Born": "October 25, 1915",
      "Died": "February 28, 1943",
      "Age": "27",
      "Ethnicity": "Jewish",
      "Notability": "Daughter of Han Hollander and Leentje Hollander-Smeer, both of whom were killed at Sobibor on July 9, 1943."
    },
    {
      "Name": "Prince Ludwik Swiatopelk-Czetwertynski",
      "Born": "1876 or 1877",
      "Died": "May 3, 1941",
      "Age": "64",
      "Ethnicity": "Polish",
      "Notability": "Noble."
    },
    {
      "Name": "Jan Mosdorf",
      "Born": "May 30, 1904",
      "Died": "October 11, 1943",
      "Age": "39",
      "Ethnicity": "Polish",
      "Notability": "Right-wing politician, director of the nationalist organization All-Polish Youth and member of political party National Radical Camp. Killed for helping Jews in the camp."
    },
    {
      "Name": "Árpád Weisz",
      "Born": "April 16, 1896",
      "Died": "January 31, 1944",
      "Age": "47",
      "Ethnicity": "Jewish",
      "Notability": "Football (soccer) player and manager."
    },
    {
      "Name": "Sarah Wiesel",
      "Born": "1905",
      "Died": "May 1944",
      "Age": "39",
      "Ethnicity": "Jewish",
      "Notability": "Mother of Elie Wiesel. Gassed immediately."
    },
    {
      "Name": "Tzipora Wiesel",
      "Born": "",
      "Died": "May 1944",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "Younger sister of Elie Wiesel. Gassed immediately with her mother"
    },
    {
      "Name": "Mala Zimetbaum",
      "Born": "January 26, 1922",
      "Died": "September 15, 1944",
      "Age": "22",
      "Ethnicity": "Jewish",
      "Notability": "Deported to the camp on Transport #10 on September 15, 1942. Inmate #19880. Her proficiency in several languages allowed her to work as an interpreter in the camp. Publicly executed at the camp after an escape attempt, with her lover, Edward Galiński."
    },
    {
      "Name": "Edward Galiński",
      "Born": "May 10, 1923",
      "Died": "September 15, 1944",
      "Age": "21",
      "Ethnicity": "Polish",
      "Notability": "Publicly executed at the camp after an escape attempt, with his lover, Mala Zimetbaum."
    },
    {
      "Name": "Eddy Hamel",
      "Born": "October 21, 1902",
      "Died": "April 30, 1943",
      "Age": "40",
      "Ethnicity": "Jewish (American)",
      "Notability": "American soccer right winger (AFC Ajax)."
    },
    {
      "Name": "Rosa Stallbaumer",
      "Born": "November 30, 1897",
      "Died": "November 23, 1942",
      "Age": "44 - 45",
      "Ethnicity": "Jewish",
      "Notability": "Wife of Anton Stallbaumer; both were members of the Austrian Resistance."
    },
    {
      "Name": "Horst Rosenthal",
      "Born": "August 10, 1915",
      "Died": "September 11, 1942",
      "Age": "27",
      "Ethnicity": "Jewish",
      "Notability": "German-born French cartoonist of Jewish descent; detained in the Gurs internment camp in Vichy France on 28 October 1940; transferred to Auschwitz on 11 September 1942 and executed on the same day; best known for his comic book Mickey au Camp de Gurs he created while held in Gurs."
    },
    {
      "Name": "Tova Friedman",
      "Born": "September 10, 1938",
      "Died": "Alive",
      "Age": 85,
      "Ethnicity": "Jewish",
      "Notability": "Friedman is among the youngest people to survive the Nazi Holocaust"
    },
    {
      "Name": "Helen Lewis",
      "Born": "June 22, 1916",
      "Died": "December 31, 2009",
      "Age": 93,
      "Ethnicity": "Jewish",
      "Notability": "Dancer who trained in Prague. Left Auschwitz on a forced march to Stutthof concentration camp in January 1945."
    },
    {
      "Name": "Anna Eilenberg-Eibeshitz",
      "Born": "November 5, 1923",
      "Died": "",
      "Age": 100,
      "Ethnicity": "Jewish",
      "Notability": "Author"
    },
    {
      "Name": "Władysław Bartoszewski",
      "Born": "February 19, 1922",
      "Died": "April 24, 2015",
      "Age": 93,
      "Ethnicity": "Polish",
      "Notability": "Member of Armia Krajowa. Released from camp due to actions by Polish Red Cross. Minister of Foreign Affairs of Poland (twice) after 1989."
    },
    {
      "Name": "Tadeusz Borowski",
      "Born": "November 12, 1922",
      "Died": "July 1, 1951",
      "Age": 28,
      "Ethnicity": "Polish",
      "Notability": "Writer. Transferred to Natzweiler-Struthof, then to Dachau concentration camp; committed suicide after the war."
    },
    {
      "Name": "George Brady",
      "Born": "February 9, 1928",
      "Died": "January 11, 2019",
      "Age": 95,
      "Ethnicity": "Jewish",
      "Notability": "Plumber. Sent on the death march; escaped when a Soviet tank blew a hole in the building he was in. His mother, father and sister Hana were gassed at the camp."
    },
    {
      "Name": "Boris Braun",
      "Born": "August 20, 1920",
      "Died": "January 11, 2019",
      "Age": 103,
      "Ethnicity": "Jewish",
      "Notability": "University professor. His mother and father were killed during the Holocaust. Sent on the death march."
    },
    {
      "Name": "Yehuda Bacon",
      "Born": "July 28, 1929",
      "Died": "alive",
      "Age": 94,
      "Ethnicity": "Jewish",
      "Notability": "Artist. Sent on the death march. His father was gassed in June 1944; his mother and his sister Hanna were deported to Stutthof concentration camp, where they died a few weeks before its liberation."
    },
    {
      "Name": "Anton Korêk",
      "Born": "March 29, 1927",
      "Died": "alive",
      "Age": 96,
      "Ethnicity": "Jewish",
      "Notability": "Carpenter. His brother was gassed in December 1943. His parents were tortured to death during the Holocaust."
    },
    {
      "Name": "Bat-Sheva Dagan",
      "Born": "September 8, 1925",
      "Died": "January 25, 2024",
      "Age": 98,
      "Ethnicity": "Jewish",
      "Notability": "Kindergarten teacher, psychologist, author. Worked in camp infirmary and in the Canada commando. Survived death march to Ravensbrück and Malchow concentration camps in January 1945, and death march to Lübz, where she was liberated on May 2, 1945."
    },
    {
      "Name": "Dario Gabbai",
      "Born": "September 2, 1922",
      "Died": "March 25, 2020",
      "Age": "",
      "Ethnicity": "Jewish (Greece)",
      "Notability": "Member of Sonderkommando. Family was killed at the camp. Sent on the death march."
    },
    {
      "Name": "Jerzy Bielecki",
      "Born": "28 March 1921",
      "Died": "October 20, 2011",
      "Age": 90,
      "Ethnicity": "Polish",
      "Notability": "Political prisoner. Suffered hanging torture (arms hung behind back)."
    },
    {
      "Name": "Józef Paczyński",
      "Born": "January 20, 1920",
      "Died": "April 26, 2015",
      "Age": 95,
      "Ethnicity": "Polish",
      "Notability": "Political prisoner. About every 1 1/2 weeks, he was ordered to cut the hair of the camp's commanding officer, Rudolf Höss. Personally witnessed gassings from nearby."
    },
    {
      "Name": "Kazimierz Piechowski",
      "Born": "October 3, 1919",
      "Died": "December 15, 2017",
      "Age": 98,
      "Ethnicity": "Polish"
    },
    {
      "Name": "Stanisław Gustaw Jaster",
      "Born": "January 1, 1921",
      "Died": "July 12, 1943",
      "Age": 22,
      "Ethnicity": "Polish",
      "Notability": "Veteran of Invasion of Poland in rank of first lieutenant, from Warsaw. On June 20, 1942, he escaped from Auschwitz."
    },
    {
      "Name": "Józef Lempart",
      "Born": "1916",
      "Died": "",
      "Age": "",
      "Ethnicity": "Polish",
      "Notability": "Priest, from Wadowice. On June 20, 1942, he escaped from Auschwitz."
    },
    {
      "Name": "Eugeniusz Bendera",
      "Born": "1 January 1921",
      "Died": "7 July 1988",
      "Age": 67,
      "Ethnicity": "Ukrainian",
      "Notability": "Auto mechanic, from Chortkiv. On June 20, 1942, he escaped from Auschwitz."
    },
    {
      "Name": "Kazimierz Smoleń",
      "Born": "April 19, 1920",
      "Died": "January 27, 2012",
      "Age": 91,
      "Ethnicity": "Polish",
      "Notability": "Political prisoner. Sent on the death march."
    },
    {
      "Name": "August Kowalczyk",
      "Born": "August 15, 1921",
      "Died": "July 29, 2012",
      "Age": 90,
      "Ethnicity": "Polish",
      "Notability": "Political prisoner."
    },
    {
      "Name": "Pavel Stenkin",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Russian",
      "Notability": "Prisoner of war."
    },
    {
      "Name": "Józef Mikusz",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Polish",
      "Notability": "Political prisoner."
    },
    {
      "Name": "Silvia Veselá",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "Deported from holding camp near Bratislava."
    },
    {
      "Name": "Eddy de Wind",
      "Born": "February 6, 1916",
      "Died": "September 27, 1987",
      "Age": 71,
      "Ethnicity": "Jewish",
      "Notability": "Psychiatrist, psychoanalyst and author who served as a haftling doctor in the Auschwitz main camp. He coined the phrase 'concentration camp syndrome', now more generally referred to as 'survivor's guilt' and 'post-traumatic stress disorder'. His memoir, ‘Last Stop Auschwitz’ is the only survivor testimony written in Auschwitz."
    },
    {
      "Name": "Eva Votavová",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": ""
    },
    {
      "Name": "Otto Pressburger",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "From Trnava. Forced to dig mass graves and exhume corpses. His mother and father were killed at the camp."
    },
    {
      "Name": "Libuša Breder",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "Worked in the Canada sector of the camp. Witnessed rapes of women by the camp's officers."
    },
    {
      "Name": "Helena Citrónová",
      "Born": "26 August 1922",
      "Died": "4 June 2007",
      "Age": 84,
      "Ethnicity": "Jewish",
      "Notability": "Worked in the Canada sector of the camp. An SS officer, Franz Wunch, fell in love with her. As a result, Wunch would later save Helena's sister from the gas chambers, although her sister's son and daughter could not be saved."
    },
    {
      "Name": "Tadeusz Rybacki",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Polish",
      "Notability": "Political prisoner. Served as a waiter at the SS canteen in the camp."
    },
    {
      "Name": "Vera Alexander",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "Witnessed crimes committed by Irma Grese."
    },
    {
      "Name": "Eva Mozes Kor",
      "Born": "January 31, 1935",
      "Died": "July 4, 2019",
      "Age": 84,
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. Both of her parents and two older sisters were killed at the camp; only Miriam and herself survived. Founder of CANDLES Holocaust Museum and Education Center."
    },
    {
      "Name": "Miriam Mozes",
      "Born": "January 31, 1935",
      "Died": "June 6, 1993",
      "Age": 58,
      "Ethnicity": "Jewish",
      "Notability": "Eva's twin sister. One of the Mengele twins who was selected and used for involuntary medical experiments. Mengele injected Miriam with a chemical that stopped the growth of her kidneys; later, Eva donated one of her kidneys."
    },
    {
      "Name": "Jona Laks",
      "Born": "1930",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish (Polish)",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. Sent on the death march with her twin sister Miriam (A27725)."
    },
    {
      "Name": "Vera Kriegel",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments."
    },
    {
      "Name": "Pearl Pufeles",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments."
    },
    {
      "Name": "Helen Rappaport",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments."
    },
    {
      "Name": "Ephraim Reichenberg",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments."
    },
    {
      "Name": "Gyuri Frankfurter",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. From Berettyóújfalu. Emigrated to United States in 1947, name changed to George."
    },
    {
      "Name": "Laci Frankfurter",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. From Berettyóújfalu. Emigrated to United States in 1947, name changed to Leslie."
    },
    {
      "Name": "Peter Greenfeld",
      "Born": "1940",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. Known at the camp as Josef Peipchek Klineman. Born in Prague."
    },
    {
      "Name": "Martha Klineman",
      "Born": "1940",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "Peter's twin. One of the Mengele twins who was selected and used for involuntary medical experiments. Born in Prague."
    },
    {
      "Name": "Lipot Salomon",
      "Born": "1923 or 1924",
      "Died": "April 19, 1965",
      "Age": 40,
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. Born in Turţ. First deported to Vynohradiv ghetto on April 14, 1944."
    },
    {
      "Name": "Dezo Salomon",
      "Born": "1923 or 1924",
      "Died": "April 22, 1996",
      "Age": 71,
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. Born in Turţ. First deported to Vynohradiv ghetto on April 14, 1944."
    },
    {
      "Name": "Peter Somogyi",
      "Born": "April 14, 1933",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. From Pécs. Their mother and older sister (14 years) were gassed at Auschwitz at arrival."
    },
    {
      "Name": "Thomas Somogyi",
      "Born": "April 14, 1933",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. From Pécs."
    },
    {
      "Name": "Stephanie Helbrun",
      "Born": "February 4, 1924",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. Born in Subotica, lived in Prague until 1939. Escaped on the death march. Their parents and sister were killed in various camps."
    },
    {
      "Name": "Annetta Helbrun",
      "Born": "February 4, 1924",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "One of the Mengele twins who was selected and used for involuntary medical experiments. Born in Subotica, lived in Prague until 1939. Escaped on the death march."
    },
    {
      "Name": "George Able",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "",
      "Notability": "Met Annetta Helbrun when both were assigned to a commando loading corpses. Later married Annetta in 1948."
    },
    {
      "Name": "Zvi Ernst Spiegel",
      "Born": 1915,
      "Died": 1993,
      "Age": 78,
      "Ethnicity": "",
      "Notability": "Assigned to supervise twins used in the medical experiments of Josef Mengele. Saved children from the gas chamber on several occasions. After the camp's liberation, he took 157 Mengele twins and homeless children to safety in Hungary. 29 years old in 1944."
    },
    {
      "Name": "Miklós Nyiszli",
      "Born": "June 17, 1901",
      "Died": "May 5, 1956",
      "Age": 54,
      "Ethnicity": "Jewish",
      "Notability": "Prisoner, and doctor (pathologist) who served Josef Mengele. Sent on the death march."
    },
    {
      "Name": "Ryszard Dacko",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "Polish",
      "Notability": "Political prisoner."
    },
    {
      "Name": "Stanislaw Hantz",
      "Born": "22 January 1923",
      "Died": "17 July 2008",
      "Age": 80,
      "Ethnicity": "Polish",
      "Notability": "Political prisoner."
    },
    {
      "Name": "Eliezer Einsenschmidt",
      "Born": 1920,
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": ""
    },
    {
      "Name": "Alice Lok Cahana",
      "Born": "February 7, 1929",
      "Died": "November 28, 2017",
      "Age": 88,
      "Ethnicity": "Jewish",
      "Notability": "Deported from Sárvár. Abstract painter."
    },
    {
      "Name": "Morris Venezia",
      "Born": "February 25, 1921",
      "Died": "September 2, 2013",
      "Age": 92,
      "Ethnicity": "Jewish",
      "Notability": "Part of the Sonderkommando. Watch Full Testimony on YouTube"
    },
    {
      "Name": "Franz Rosenbach",
      "Born": 1927,
      "Died": 2012,
      "Age": 85,
      "Ethnicity": "Romanian",
      "Notability": "Survived because he was transferred to another camp. His mother was killed at the camp."
    },
    {
      "Name": "Władysław Szmyt",
      "Born": "March 20, 1924",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Polish",
      "Notability": "Political prisoner."
    },
    {
      "Name": "Henryk Mandelbaum",
      "Born": "December 15, 1922",
      "Died": "June 17, 2008",
      "Age": 85,
      "Ethnicity": "Jewish",
      "Notability": "Part of Sonderkommando. Fled on a death march."
    },
    {
      "Name": "Ibi Mann",
      "Born": "October 24, 1924",
      "Died": "",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": ""
    },
    {
      "Name": "Lucille Eichengreen",
      "Born": "February 1, 1925",
      "Died": "February 7, 2020",
      "Age": 98,
      "Ethnicity": "Jewish",
      "Notability": "From Hamburg. Deported to Łódź Ghetto on October 26, 1941, where she was molested by Mordechai Chaim Rumkowski. Remained there for two years until deported to Auschwitz. Transferred to Neuengamme concentration camp."
    },
    {
      "Name": "Witold Pilecki",
      "Born": "May 13, 1901",
      "Died": "May 25, 1948",
      "Age": 47,
      "Ethnicity": "Polish",
      "Notability": "Soldier and secret agent (Tomasz Serafiński). He volunteered to be imprisoned at Auschwitz (the only person known to do so) for a Polish resistance operation in order to gather intelligence and escape. As the author of the Witold's report, the first intelligence report on Auschwitz, his operation enabled the Polish government-in-exile to convince the Allies that the Holocaust was taking place. Later executed by communists."
    },
    {
      "Name": "Elie Wiesel",
      "Born": "September 30, 1928",
      "Died": "July 2, 2016",
      "Age": 87,
      "Ethnicity": "Jewish",
      "Notability": "Writer, professor, political activist, Nobel Peace Prize winner (1986). His mother and younger sister are gassed immediately. Transferred to Buchenwald concentration camp, where Wiesel's father, Shlomo, was beaten Two older sisters, Hilda and Beatrice, survive."
    },
    {
      "Name": "Renée Firestone",
      "Born": "April 13, 1924",
      "Died": "alive",
      "Age": "",
      "Ethnicity": "Jewish",
      "Notability": "Her sister was killed at the camp during medical experiments."
    },
    {
      "Name": "Samuel Pisar",
      "Born": "March 18, 1929",
      "Died": "July 27, 2015",
      "Age": 86,
      "Ethnicity": "Jewish",
      "Notability": "Lawyer, writer. His parents and younger sister Frieda were killed during the war. Transferred to Dachau concentration camp. Escaped during a death march."
    },
    {
      "Name": "Karel Ančerl",
      "Born": "April 11, 1908",
      "Died": "July 3, 1973",
      "Age": 65,
      "Ethnicity": "Jewish",
      "Notability": "Conductor. Josef Mengele was about to send Ančerl to the gas chamber, but a weakened Pavel Haas, who stood next to him, began to cough and the death sentence was therefore chosen for him instead. Helped to organize cultural life in Theresienstadt concentration camp."
    },
    {
      "Name": "Gisella Perl",
      "Born": "December 10, 1907",
      "Died": "December 16, 1988",
      "Age": 81,
      "Ethnicity": "Jewish",
      "Notability": "Gynecologist. Forced to be an inmate doctor. Saved the lives of hundreds of pregnant women by aborting their pregnancies (pregnant women were often killed for experiments by Josef Mengele). Wrote one of the earliest first-person accounts of life in Auschwitz in her 1948 book, I Was a Doctor in Auschwitz."
    },
    {
      "Name": "Rudolf Vrba",
      "Born": "September 11, 1924",
      "Died": "March 27, 2006",
      "Age": 81,
      "Ethnicity": "Jewish",
      "Notability": "Scientist. Escaped from the camp. Co-author of the Vrba-Wetzler report, delivered to the Allies, which saved the lives of an estimated 120 to 200 thousand Jews. Testified against Adolf Eichmann at Eichmann's trial."
    },
    {
      "Name": "Eugeniusz Hejka",
      "Born": "October 16, 1918",
      "Died": "2009",
      "Age": 90,
      "Ethnicity": "Polish",
      "Notability": "Polish-Catholic soldier punished as an eleventh for escape of Tadeusz Wiejowski, survived."
    },
    {
      "Name": "Alfréd Wetzler",
      "Born": "May 10, 1918",
      "Died": "February 8, 1988",
      "Age": 69,
      "Ethnicity": "Jewish",
      "Notability": "Escaped from the camp. Co-author of the Vrba-Wetzler report, delivered to the Allies, which saved the lives of an estimated 120 to 200 thousand Jews."
    },
    {
      "Name": "Alex Dekel",
      "Born": "",
      "Died": "",
      "Age": "",
      "Ethnicity": "",
      "Notability": "Served under Josef Mengele as his subject, witnessing many of Mengele's human medical experiments."
    },
    {
      "Name": "Wieslaw Kielar",
      "Born": "August 12, 1912",
      "Died": "June 1, 1990",
      "Age": 77,
      "Ethnicity": "Polish (non-Jewish)",
      "Notability": "Author of the autobiographical novel Anus Mundi: 5 Years in Auschwitz."
    },
    {
      "Name": "Primo Levi",
      "Born": "July 31, 1919",
      "Died": "April 11, 1987",
      "Age": 67,
      "Ethnicity": "Jewish (Italian)",
      "Notability": "Was an Italian Jewish chemist and writer. He was the author of several books, novels, collections of short stories, essays, and poems."
    },
    {
      "Name": "Anne Frank",
      "Born": "June 12, 1929",
      "Died": "February or March 1945",
      "Age": 15,
      "Ethnicity": "Jewish (German)",
      "Notability": "Teenage diarist from Amsterdam, held 7 weeks at Auschwitz, transferred to Bergen-Belsen where she died of Typhus."
    },
    {
      "Name": "Eva Brewster",
      "Born": "December 28, 1922",
      "Died": "December 3, 2004",
      "Age": 81,
      "Ethnicity": "Jewish (German)",
      "Notability": "Author of Vanished in Darkness  -  An Auschwitz Memoir."
    },
    {
      "Name": "Sigmund Sobolewski",
      "Born": "May 11, 1923",
      "Died": "August 7, 2017",
      "Age": 94,
      "Ethnicity": "Polish",
      "Notability": "Immortalized in the book Prisoner 88: The Man in Stripes."
    },
    {
      "Name": "Thomas Buergenthal",
      "Born": "May 11, 1934",
      "Died": "May 29, 2023",
      "Age": 89,
      "Ethnicity": "Jewish",
      "Notability": "Human rights champion, former judge of the International Court of Justice, author of A Lucky Child, interned at Auschwitz-Birkenau and Sachsenhausen."
    },
    {
      "Name": "Józef Cyrankiewicz",
      "Born": "April 23, 1911",
      "Died": "January 20, 1989",
      "Age": 77,
      "Ethnicity": "Polish",
      "Notability": "Later Prime Minister of Poland and Chairman of the Polish Council of State."
    },
    {
      "Name": "Yehiel De-Nur",
      "Born": "May 16, 1909",
      "Died": "July 17, 2001",
      "Age": 92,
      "Ethnicity": "Jewish",
      "Notability": "Writer."
    },
    {
      "Name": "Robert Desnos",
      "Born": "July 4, 1900",
      "Died": "June 8, 1945",
      "Age": 44,
      "Ethnicity": "French",
      "Notability": "French surrealist poet. Died of typhoid in Theresienstadt."
    },
    {
      "Name": "Lale Sokolov",
      "Born": "1916",
      "Died": "October 31, 2006",
      "Age": 90,
      "Ethnicity": "Jewish",
      "Notability": "Camp Tätowierer (tattooist)"
    }
]