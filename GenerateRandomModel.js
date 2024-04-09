const model = {
     genres: {
          viaplay: {
               action: {
                   movies: ["John Wick: Chapter 3 - Parabellum", "Mission: Impossible - Fallout", "Atomic Blonde", "Fast & Furious Presents: Hobbs & Shaw", "Bad Boys for Life", "Bloodshot", "21 Bridges", "Angel Has Fallen", "The Equalizer 2", "Mile 22"],
                   series: ["Strike Back", "Agent Hamilton", "The Blacklist", "Prison Break", "Jack Ryan", "Quantico", "Narcos", "Money Heist", "Lupin", "Arrow"]
               },
               drama: {
                   movies: ["The Danish Girl", "A Star Is Born", "The Revenant", "The Pursuit of Happyness", "The Theory of Everything", "Manchester by the Sea", "No Country for Old Men", "The Social Network", "Brokeback Mountain", "Dallas Buyers Club"],
                   series: ["The Affair", "Big Little Lies", "The Crown", "Breaking Bad", "Better Call Saul", "This Is Us", "Westworld", "The Handmaid's Tale", "Succession", "The Queen's Gambit"]
               },
               comedy: {
                   movies: ["The Grand Budapest Hotel", "Deadpool", "Superbad", "Game Night", "Tropic Thunder", "Step Brothers", "Borat Subsequent Moviefilm", "The Hangover", "21 Jump Street", "We're the Millers"],
                   series: ["Brooklyn Nine-Nine", "The Office (US)", "Parks and Recreation", "The IT Crowd", "Friends", "The Big Bang Theory", "Modern Family", "How I Met Your Mother", "Community", "Arrested Development"]
               },
               sciFi: {
                   movies: ["Blade Runner 2049", "Inception", "The Matrix", "Interstellar", "Arrival", "Minority Report", "District 9", "Avatar", "The Martian", "Prometheus"],
                   series: ["Stranger Things", "Black Mirror", "The Mandalorian", "Doctor Who", "The Expanse", "The X-Files", "Star Trek: Discovery", "Battlestar Galactica", "Fringe", "Firefly"]
               },
               thriller: {
                   movies: ["Gone Girl", "Prisoners", "The Girl with the Dragon Tattoo", "Zodiac", "Shutter Island", "Sicario", "The Departed", "Se7en", "Oldboy", "Heat"],
                   series: ["Mindhunter", "True Detective", "Fargo", "The Night Manager", "Hannibal", "Sherlock", "Broadchurch", "The Killing", "Ozark", "Breaking Bad"]
               }
           },
         hbo: {
             action: {
                 movies: ["Wonder Woman", "Mad Max: Fury Road", "The Dark Knight"],
                 series: ["Game of Thrones", "Chernobyl", "The Sopranos", "True Detective", "Westworld", "Watchmen", "His Dark Materials", "Lovecraft Country", "Boardwalk Empire", "Barry"]
             },
             drama: {
                 movies: ["Big Little Lies", "The Shawshank Redemption", "The Godfather", "The Green Mile", "Forrest Gump", "Schindler's List", "The Prestige", "The Departed", "Shutter Island", "Fight Club"],
                 series: ["The Wire", "Succession", "Six Feet Under", "Band of Brothers", "The Leftovers", "Sharp Objects", "The Night Of", "Big Love", "In Treatment", "True Blood"]
             },
             comedy: {
                 movies: ["Superbad", "Borat Subsequent Moviefilm", "The Hangover", "Anchorman: The Legend of Ron Burgundy", "Super Troopers", "Old School", "The 40-Year-Old Virgin", "Dumb and Dumber", "Talladega Nights: The Ballad of Ricky Bobby", "Step Brothers"],
                 series: ["Silicon Valley", "Veep", "Curb Your Enthusiasm", "Barry", "Flight of the Conchords", "Entourage", "Eastbound & Down", "Avenue 5", "Girls", "Insecure"]
             },
             sciFi: {
                 movies: ["Blade Runner 2049", "Interstellar", "Inception", "The Matrix", "The Martian", "Star Wars: Episode V - The Empire Strikes Back", "Star Wars: Episode IV - A New Hope", "Star Wars: Episode VI - Return of the Jedi", "Star Wars: Episode VII - The Force Awakens", "Star Wars: Episode VIII - The Last Jedi"],
                 series: ["Westworld", "Watchmen", "His Dark Materials", "Lovecraft Country", "Game of Thrones", "The Mandalorian", "Avenue 5", "Raised by Wolves", "The Nevers", "The Hitchhiker's Guide to the Galaxy"]
             },
             thriller: {
                 movies: ["The Silence of the Lambs", "Se7en", "Zodiac", "Prisoners", "The Usual Suspects", "Memento", "Fight Club", "The Departed", "Gone Girl", "Shutter Island"],
                 series: ["True Detective", "Sharp Objects", "The Night Of", "Chernobyl", "The Outsider", "Perry Mason", "The Undoing", "Big Little Lies", "The Third Day", "The Plot Against America"]
             }
         },
         disney: {
             animation: {
                 movies: ["Toy Story", "The Lion King", "Frozen", "Finding Nemo", "Moana", "Zootopia", "Coco", "Ratatouille", "WALL·E", "The Incredibles"],
                 series: ["DuckTales", "Mickey Mouse Clubhouse", "The Proud Family", "Phineas and Ferb", "Tangled: The Series", "The Simpsons", "Gravity Falls", "Star Wars: The Clone Wars", "Elena of Avalor", "Big Hero 6: The Series"]
             },
             family: {
                 movies: ["The Parent Trap", "Home Alone", "Honey, I Shrunk the Kids", "The Princess Diaries", "The Sound of Music", "Mary Poppins", "101 Dalmatians", "Beauty and the Beast", "The Jungle Book", "Aladdin"],
                 series: ["Jessie", "Good Luck Charlie", "Wizards of Waverly Place", "Andi Mack", "Lizzie McGuire", "Kim Possible", "Hannah Montana", "Liv and Maddie", "Boy Meets World", "Raven's Home"]
             },
             fantasy: {
                 movies: ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Half-Blood Prince", "Harry Potter and the Deathly Hallows – Part 1", "Harry Potter and the Deathly Hallows – Part 2", "Pirates of the Caribbean: The Curse of the Black Pearl", "Alice in Wonderland"],
                 series: ["Once Upon a Time", "The Mandalorian", "WandaVision", "High School Musical: The Musical: The Series", "The Owl House", "Maleficent: Mistress of Evil", "Tangled: The Series", "The Lion Guard", "Star Wars: The Bad Batch", "Pixie Hollow Games"]
             },
             music: {
                 movies: ["Frozen", "High School Musical", "Coco", "The Lion King", "Moana", "Hamilton", "A Goofy Movie", "Camp Rock", "The Little Mermaid", "Aladdin"],
                 series: ["High School Musical: The Musical: The Series", "Hannah Montana", "The Descendants: Wicked World", "The Muppets", "Tangled: The Series", "Vampirina", "Elena of Avalor", "The Mandalorian", "Rapunzel's Tangled Adventure", "Star Wars Rebels"]
             },
             adventure: {
                 movies: ["Pirates of the Caribbean: The Curse of the Black Pearl", "National Treasure", "Indiana Jones and the Raiders of the Lost Ark", "Maleficent", "Alice in Wonderland", "Mulan", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "Frozen II", "Beauty and the Beast", "Moana"],
                 series: ["The Mandalorian", "WandaVision", "The Owl House", "Star Wars: The Bad Batch", "DuckTales", "Gravity Falls", "Big Hero 6: The Series", "Legend of the Three Caballeros", "Kim Possible", "Tangled: The Series"]
             }
         },
         netflix: {
             action: {
                 movies: ["Extraction", "The Old Guard", "6 Underground", "Bird Box", "Bright", "The Irishman", "The Highwaymen", "Triple Frontier", "Army of the Dead", "Project Power"],
                 series: ["Stranger Things", "The Umbrella Academy", "Narcos", "Money Heist", "Cobra Kai", "The Witcher", "Lupin", "Black Summer", "Altered Carbon", "Daredevil"]
             },
             drama: {
                 movies: ["Marriage Story", "The Irishman", "The Trial of the Chicago 7", "Roma", "The Social Network", "Spotlight", "Uncut Gems", "Mudbound", "Manchester by the Sea", "The Two Popes"],
                 series: ["The Crown", "Breaking Bad", "Better Call Saul", "Ozark", "The Queen's Gambit", "Peaky Blinders", "The Haunting of Hill House", "Dark", "Narcos: Mexico", "Mindhunter"]
             },
             comedy: {
                 movies: ["The Hangover", "Superbad", "Step Brothers", "The 40-Year-Old Virgin", "Anchorman: The Legend of Ron Burgundy", "Pineapple Express", "Talladega Nights: The Ballad of Ricky Bobby", "Dumb and Dumber", "Borat Subsequent Moviefilm", "Game Night"],
                 series: ["The Office (US)", "Brooklyn Nine-Nine", "BoJack Horseman", "The Good Place", "Rick and Morty", "Friends", "Arrested Development", "The IT Crowd", "Community", "Schitt's Creek"]
             },
             sciFi: {
                 movies: ["Inception", "The Matrix", "Blade Runner 2049", "The Terminator", "Back to the Future", "Avatar", "Interstellar", "The Fifth Element", "Minority Report", "District 9"],
                 series: ["Stranger Things", "Black Mirror", "Altered Carbon", "The Umbrella Academy", "Dark", "The Witcher", "Love, Death & Robots", "Travelers", "Star Trek: Discovery", "Sense8"]
             },
             horror: {
                 movies: ["The Conjuring", "Hereditary", "Bird Box", "A Quiet Place", "The Babadook", "The Ritual", "Gerald's Game", "Train to Busan", "Hush", "Cabin in the Woods"],
                 series: ["The Haunting of Hill House", "Stranger Things", "Black Mirror", "Marianne", "The Walking Dead", "American Horror Story", "The Order", "Locke & Key", "Penny Dreadful", "The Strain"]
             }
         }
     }
 };
 