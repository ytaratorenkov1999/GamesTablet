(() => {
    "use strict";

    const t = document.querySelector(".cards"),
        s = document.querySelector(".graph-modal"),
        i = {
            ru: {
                btnBack: "Назад",
                btnPlay: "Играть",
                btnYes: "Да",
                btnNo: "Нет",
                howPlay: "Об игре",
                control: "Управление - сенсорное.",
                confirm: "Вы действительно хотите выйти из игры?",
                heroTitle: "Игры на борту"
            },
            en: {
                btnBack: "Back",
                btnPlay: "Play",
                btnYes: "Yes",
                btnNo: "No",
                howPlay: "About game",
                control: "Control - touch.",
                confirm: "Do you really want to quit the game?",
                heroTitle: "In-Flight Games"
            },
            fr: {
                btnBack: "Précédent",
                btnPlay: "Jouer",
                btnYes: "Voui",
                btnNo: "Non",
                howPlay: "A propos du jeu",
                control: "Contrôle - tactile.",
                confirm: "Voulez-vous vraiment vous retirer du jeu?",
                heroTitle: "Jeux à bord"
            },
            es: {
                btnBack: "Anterior",
                btnPlay: "Jugar",
                btnYes: "Sí",
                btnNo: "No",
                howPlay: "Sobre el juego",
                control: "Control - táctil.",
                confirm: "¿De verdad quieres salir del juego?",
                heroTitle: "Juegos a bordo"
            },
            zh: {
                btnBack: "返回按钮",
                btnPlay: "玩",
                btnYes: "是",
                btnNo: "不",
                howPlay: "游戏详情",
                control: "管控-触摸。",
                confirm: "你真的想退出游戏吗？",
                heroTitle: "机上游戏"
            }
        },
        a = [{
            index: 1,
            name: "checkers",
            rate: 0,
            ru: {
                title: "Шашки",
                desc: "Шашки — логическая настольная игра для двух игроков, в которой нужно передвигать фишки-шашки по клеткам шашечной доски."
            },
            en: {
                title: "Checkers",
                desc: "Checkers is a logical board game for two players in which players move checker pieces across the squares of a checkerboard."
            },
            fr: {
                title: "Dames",
                desc: "Les dames sont un jeu de société logique pour deux joueurs, dans lequel il faut déplacer des pions sur les cases d'un damier."
            },
            es: {
                title: "Damas",
                desc: "Las damas son un juego de mesa lógico para dos jugadores en el que hay que mover fichas por las casillas de un tablero de damas."
            },
            zh: {
                title: "跳棋",
                desc: "跳棋——一种供两名玩家参与的逻辑桌游，玩家需在棋盘格子上移动棋子。"
            }
        }, {
            index: 2,
            name: "chess",
            rate: 0,
            ru: {
                title: "Шахматы",
                desc: "Шахматы — это древняя стратегическая игра для двух игроков, где на 64-клеточной доске сражаются 32 фигуры: 16 белых и 16 черных. Цель игры — поставить королю противника шах и мат, то есть захватить его в ловушку, из которой он не сможет выбраться."
            },
            en: {
                title: "Chess",
                desc: "Chess is an ancient strategic game for two players in which 32 pieces—16 white and 16 black—battle on a 64-square board. The goal of the game is to checkmate the opponent’s king, trapping it so that it cannot escape."
            },
            fr: {
                title: "Échecs",
                desc: "Les échecs sont un jeu stratégique ancien pour deux joueurs, où 32 pièces s'affrontent sur un échiquier de 64 cases : 16 blanches et 16 noires. Le but du jeu est de mettre le roi adverse échec et mat, c'est-à-dire de le piéger de manière à ce qu'il ne puisse plus s'échapper."
            },
            es: {
                title: "Ajedrez",
                desc: "El ajedrez es un antiguo juego estratégico para dos jugadores en el que se enfrentan 32 piezas (16 blancas y 16 negras) en un tablero de 64 casillas. El objetivo del juego es hacer jaque mate al rey del adversario, es decir, atraparlo en una trampa de la que no pueda escapar."
            },
            zh: {
                title: "国际象棋",
                desc: "国际象棋是一种古老的双人策略游戏，在64格棋盘上展开32枚棋子的较量：16枚白棋与16枚黑棋。游戏目标是将对手的国王置于死地，即将其困于无法脱身的陷阱之中。"
            }
        }, {
            index: 3,
            name: "sudoku",
            rate: 0,
            ru: {
                title: "Судоку",
                desc: "Судоку — головоломка с числами, где нужно расставить цифры от 1 до 9 на квадратном поле 9x9 так, чтобы они не повторялись в каждой строке, столбце и квадрате 3x3."
            },
            en: {
                title: "Sudoku",
                desc: "Sudoku is a number puzzle where you have to place the numbers 1 to 9 in a 9x9 square grid so that they do not repeat in each row, column, and 3x3 square."
            },
            fr: {
                title: "Sudoku",
                desc: "Le sudoku est un casse-tête mathématique dans lequel il faut placer les chiffres de 1 à 9 dans une grille carrée de 9x9 cases, de manière à ce qu'ils ne se répètent pas dans chaque ligne, chaque colonne et chaque carré de 3x3 cases."
            },
            es: {
                title: "Sudoku",
                desc: "Sudoku: un rompecabezas con números en el que hay que colocar los números del 1 al 9 en un cuadrado de 9x9 de manera que no se repitan en ninguna fila, columna o cuadrado de 3x3."
            },
            zh: {
                title: "数独",
                desc: "数独是一种数字谜题，要求在9×9的方格中填入数字1至9，确保每个数字在每行、每列及每个3×3的小方格中均不重复。"
            }
        }, {
            index: 4,
            name: "crossword",
            rate: 12,
            ru: {
                title: "Кроссворды",
                desc: "Любите головоломки? Тогда кроссворды для вас! Множество заданий, разные темы и сложность. Развивайте логику, память и эрудицию в увлекательной игре."
            },
            en: {
                title: "Crossword Puzzles",
                desc: "Do you like puzzles? Then crossword puzzles are for you! There are plenty of puzzles to solve, covering a variety of topics and difficulty levels. Sharpen your logic, memory, and general knowledge with this fun game."
            },
            fr: {
                title: "Mots croisés",
                desc: "Vous aimez les casse-têtes? Si c'est le cas, les mots croisés sont faits pour vous! De nombreux défis, des thèmes variés, des niveaux de difficulté variés. Améliorez votre logique, votre mémoire et votre culture générale grâce à ce jeu passionnant."
            },
            es: {
                title: "Crucigramas",
                desc: "¿Te gustan los rompecabezas? ¡Entonces los crucigramas son para ti! Gran variedad de tareas con diferentes temas y niveles de dificultad. Desarrolla tu lógica, memoria y cultura general en este entretenido juego."
            },
            zh: {
                title: "纵横填字谜",
                desc: "你喜欢解谜吗？这款游戏专为你打造！海量填字关卡，不同主题与难度，持续挑战你的思维能力。在轻松有趣的游戏中提升逻辑、记忆力与知识储备。"
            }
        }, {
            index: 5,
            name: "spacecraft",
            rate: 6,
            ru: {
                title: "Spacecraft: Война кораблей",
                desc: "Динамичная космическая аркада, где вы управляете модульным кораблем и сражаетесь с врагами. Собирайте новые части, улучшайте оружие, усиливайте корабль, проходите уровни и превращайте его в мощную боевую станцию!"
            },
            en: {
                title: "Spacecraft: War of the Ships",
                desc: "A fast-paced space arcade game where you pilot a modular ship and battle enemies. Collect new parts, upgrade your weapons, enhance your ship, complete levels, and turn it into a powerful battle station!"
            },
            fr: {
                title: "Spacecraft: La guerre des vaisseaux",
                desc: "Un jeu d'arcade spatial dynamique où vous pilotez un vaisseau modulaire et combattez des ennemis. Collectez de nouvelles pièces, améliorez vos armes, renforcez votre vaisseau, passez des niveaux et transformez-le en une puissante station de combat!"
            },
            es: {
                title: "Spacecraft: Guerra de naves espaciales",
                desc: "Un dinámico arcade espacial donde controlas una nave modular y luchas contra los enemigos. ¡Reúne nuevas piezas, mejora tus armas, fortalece tu nave, supera niveles y conviértela en una poderosa estación de combate!"
            },
            zh: {
                title: "星际战舰：太空战争",
                desc: "动态太空射击游戏，操控可组装的战舰迎战敌人。收集新部件，升级武器系统，强化战舰性能，完成关卡挑战，将你的飞船打造为最强宇宙战斗堡垒！"
            }
        }, {
            index: 6,
            name: "tank_attack_5",
            rate: 12,
            ru: {
                title: "Tank Attack 5",
                desc: "Экшен про танковые сражения! Покупайте и улучшайте боевую технику, проходите аркадные бои, защищайте базу, сражайтесь с боссами и открывайте новые танки, камуфляжи и локации."
            },
            en: {
                title: "Tank Attack 5",
                desc: "An action game featuring tank battles! Buy and upgrade your tanks, take on arcade-style battles, defend your base, fight bosses, and unlock new tanks, camouflage patterns, and locations."
            },
            fr: {
                title: "Tank Attack 5",
                desc: "Un jeu d'action sur des combats de chars! Achetez et améliorez votre matériel de combat, participez à des combats de type arcade, défendez votre camp, affrontez des boss et débloquez de nouveaux chars, camouflages et lieux."
            },
            es: {
                title: "Tank Attack 5",
                desc: "¡Juego de acción sobre batallas de tanques! Compra y mejora tu equipo de combate, participa en combates arcade, defiende la base, enfréntate a los jefes y desbloquea nuevos tanques, camuflajes y escenarios."
            },
            zh: {
                title: "坦克突击5",
                desc: "激烈的坦克动作射击游戏！购买并升级战斗装备，在街机式战斗中生存下来，保卫基地，对抗强力boss，解锁全新坦克、涂装与战斗地图。"
            }
        }, {
            index: 7,
            name: "trampoline_basketball",
            rate: 0,
            ru: {
                title: "Баскетбол на батутах",
                desc: "Добро пожаловать в захватывающий мир баскетбола на батуте! Прыгайте, цельтесь и попадайте в красные ведра, чтобы пройти к финишу. Проходите уровни, открывайте новые испытания и старайтесь набрать максимум очков за точность и скорость."
            },
            en: {
                title: "Trampoline Basketball",
                desc: "Welcome to the exciting world of trampoline basketball! Jump, aim, and shoot into the red baskets to reach the finish line. Complete levels, unlock new challenges, and try to score as many points as possible for accuracy and speed."
            },
            fr: {
                title: "Basketball sur trampoline",
                desc: "Bienvenue dans l'univers passionnant du basketball sur trampoline! Sautez, visez et touchez les seaux rouges pour arriver en finale. Passez les niveaux, débloquez de nouveaux défis et tâchez de marquer un maximum de points pour précision et rapidité."
            },
            es: {
                title: "Baloncesto sobre camas elásticas",
                desc: "¡Bienvenido al apasionante mundo del baloncesto sobre cama elástica! Salta, apunta y encesta en los baldes rojos para llegar a la meta. Supera niveles, desbloquea nuevos desafíos e intenta conseguir la máxima puntuación por tu precisión y velocidad."
            },
            zh: {
                title: "蹦床篮球",
                desc: "欢迎来到充满趣味与挑战的蹦床篮球世界！跳跃、瞄准，将篮球精准投入红色篮筐，顺利冲向终点。不断挑战关卡，解锁全新玩法，在速度与精准之间冲击更高分数。"
            }
        }, {
            index: 8,
            name: "the_domino",
            rate: 0,
            ru: {
                title: "Домино",
                desc: "Классическая игра с простыми правилами и понятным управлением. Выкладывайте костяшки, подбирайте лучшие ходы, блокируйте соперников и старайтесь первым избавиться от всех доминошек."
            },
            en: {
                title: "Dominoes",
                desc: "A classic game with simple rules and easy-to-understand controls. Place your dominoes, choose the best moves, block your opponents, and try to be the first to get rid of all your dominoes."
            },
            fr: {
                title: "Dominos",
                desc: "Un jeu classique aux règles simples et aux commandes intuitives. Placez vos dominos, choisissez les meilleurs coups, bloquez vos adversaires et tâchez d'être le premier à vous débarrasser de tous vos dominos."
            },
            es: {
                title: "Dominó",
                desc: "Un juego clásico con reglas simples y controles intuitivos. Coloca las fichas, elige las mejores jugadas, bloquea a tus rivales e intenta ser el primero en quedarte sin fichas de dominó."
            },
            zh: {
                title: "多米诺骨牌",
                desc: "经典玩法，简单规则，轻松操作，带来纯粹的休闲体验。合理出牌，制定最佳策略，阻挡对手行动，率先清空所有骨牌，赢得胜利。"
            }
        }, {
            index: 9,
            name: "screwdom",
            rate: 0,
            ru: {
                title: "Достань Винтик: Головоломка",
                desc: "Выкручивай винты, освобождай детали и ищи верную последовательность! Каждый уровень становится сложнее и требует внимательности и логики. Простое управление, сложные загадки - увлекательно для всех возрастов!"
            },
            en: {
                title: "Get the Screw - Puzzle",
                desc: "Unscrew the bolts, remove the parts, and figure out the right sequence! Each level gets harder and requires attention to detail and logical thinking. Simple controls, challenging puzzles—fun for all ages!"
            },
            fr: {
                title: "Enlève une vis - Casse-tête",
                desc: "Dévissez des vis, retirez des pièces et trouvez la bonne séquence de mouvements! Chaque niveau est encore plus difficile et exige de la concentration et de la logique. Des commandes simples, des énigmes complexes: un jeu passionnant pour tous les âges!"
            },
            es: {
                title: "«Sacar el tornillo» - Rompecabezas",
                desc: "¡Desatornilla los tornillos, libera las piezas y busca el orden correcto! Cada nivel se hace más complicado y requiere atención y lógica. Controles sencillos, acertijos desafiantes: ¡divertido para todas las edades!"
            },
            zh: {
                title: "拆螺丝益智挑战",
                desc: "旋转螺丝，释放卡住的零件，寻找正确的拆解顺序！每一关难度逐步提升，更加考验你的观察力与逻辑思维。简单操作，烧脑谜题，适合所有年龄段的解压益智游戏体验！"
            }
        }, {
            index: 10,
            name: "traffic_rider",
            rate: 12,
            ru: {
                title: "Езда на мотоцикле: Мотогонщик",
                desc: "Динамичная гоночная игра, где вы мчитесь по дорогам, обходите транспорт и стараетесь проехать как можно дальше. Улучшайте характеристики и проверяйте реакцию в скоростных заездах!"
            },
            en: {
                title: "Motorcycling: Motorcycle Racer",
                desc: "A fast-paced racing game where you speed down the roads, dodge other vehicles, and try to go as far as possible. Upgrade your car's performance and test your reflexes in high-speed races!"
            },
            fr: {
                title: "La course moto: Le motard",
                desc: "Un jeu de course dynamique où vous parcourez des routes à toute vitesse, slalomez entre les véhicules et tâchez d'aller le plus loin possible. Améliorez vos performances et testez vos réflexes lors de courses de vitesse!"
            },
            es: {
                title: "Conducción de motocicleta: Motociclista",
                desc: "Un juego de carreras trepidante en el que tendrás que correr por las carreteras, esquivar a otros vehículos e intentar llegar lo más lejos posible. ¡Mejora las características y pon a prueba tus reflejos en carreras rápidas!"
            },
            zh: {
                title: "极速赛车：摩托竞速王",
                desc: "一款高速竞速游戏，驾驶车辆在道路上飞驰，灵活躲避车流，尽可能跑得更远。升级车辆性能，在极速挑战中不断突破反应极限，体验紧张刺激的飙车快感！ "
            }
        }, {
            index: 11,
            name: "dreamy_room",
            rate: 6,
            ru: {
                title: "Комната мечты: Расстановка предметов",
                desc: "Расслабляющая игра про порядок и уют. Расставляй мебель, раскладывай предметы по местам и создавай комнату мечты. Простое управление, приятная атмосфера и спокойный геймплей для всех возрастов!"
            },
            en: {
                title: "The Dream Room: Arranging the Furniture",
                desc: "A relaxing game about organization and coziness. Arrange furniture, put items in their places, and create the room of your dreams. Simple controls, a pleasant atmosphere, and laid-back gameplay for all ages!"
            },
            fr: {
                title: "La chambre de mes rêves: je de rangement",
                desc: "Un jeu apaisant sur l'ordre et le confort. Disposez des meubles, rangez des objets et créez une pièce de vos rêves. Des commandes simples, une ambiance agréable et un gameplay tranquille pour tous les âges!"
            },
            es: {
                title: "La habitación de tus sueños: distribución de objetos",
                desc: "Un juego relajante sobre orden y confort. Ubica muebles, organiza objetos y crea la habitación de tus sueños. ¡Controles sencillos, ambiente agradable y jugabilidad relajada para todas las edades!"
            },
            zh: {
                title: "梦想房间：家居布置大师",
                desc: "一款轻松治愈的整理收纳游戏。摆放家具，整理物品，让房间恢复整洁与温馨。简单操作，舒适氛围，适合所有年龄段的放松体验！"
            }
        }, {
            index: 13,
            name: "jewels_palace",
            rate: 6,
            ru: {
                title: "Найди сокровища: Три в ряд",
                desc: "Яркая игра, где нужно собирать комбинации, проходить уровни и искать необычные сокровища. Используйте бонусы, продумывайте ходы и отправляйтесь в приключение через сотни увлекательных испытаний!"
            },
            en: {
                title: "Find the Treasure - Match 3",
                desc: "A vibrant game where you have to make combinations, complete levels, and search for unusual treasures. Use bonuses, plan your moves, and set off on an adventure through hundreds of exciting challenges!"
            },
            fr: {
                title: "La chasse aux trésors - Match 3",
                desc: "Un jeu haut en couleurs où il faut former des combinaisons, passer des niveaux et chercher des trésors insolites. Profitez des bonus, réfléchissez bien à vos coups et lancez-vous dans une aventure ponctuée de centaines d'épreuves passionnantes!"
            },
            es: {
                title: "Encontrar tesoros - Tres en línea",
                desc: "Un emocionante juego en el que tienes que formar combinaciones, superar niveles y buscar tesoros increíbles. ¡Utiliza bonificaciones, piensa bien tus jugadas y embárcate en una aventura a través de cientos de emocionantes pruebas!"
            },
            zh: {
                title: "寻宝三消：宝藏连线",
                desc: "这是一款色彩丰富的三消闯关游戏。收集组合，完成关卡挑战，寻找稀有宝藏。合理使用道具，规划每一步行动，在数百个精彩关卡中开启冒险之旅！"
            }
        }, {
            index: 14,
            name: "horror_haze",
            rate: 16,
            ru: {
                title: "Побег из Портала",
                desc: "Вы застряли между мирами. Исследуйте катакомбы, обходите ловушки, решайте головоломки и сражайтесь с монстрами. Найдите способ активировать портал и выбраться!"
            },
            en: {
                title: "Escape from the Portal",
                desc: "You're stuck between worlds. Explore the catacombs, avoid traps, solve puzzles, and battle monsters. Find a way to activate the portal and escape!"
            },
            fr: {
                title: "Portal Escape",
                desc: "Vous êtes coincé entre deux mondes. Explorez les catacombes, évitez les pièges, résolvez des énigmes et affrontez des monstres. Trouvez un moyen d'activer le portail pour vous échapper!"
            },
            es: {
                title: "Escape del Portal",
                desc: "Estás atrapado entre mundos. Explora catacumbas, esquiva trampas, resuelve acertijos y enfréntate a monstruos. ¡Encuentra cómo activar el portal y escapar!"
            },
            zh: {
                title: "逃离传送门",
                desc: "你被困在两个世界之间。探索地下迷宫，躲避致命陷阱，破解复杂谜题，并与怪物战斗。寻找激活传送门的方法，努力逃离这个未知世界！"
            }
        }, {
            index: 15,
            name: "gas_station",
            rate: 12,
            ru: {
                title: "Симулятор заправки: Стикман",
                desc: "Веселая игра про развитие собственной заправки. Обслуживайте машины, улучшайте станцию, открывайте магазин, кафе и новые зоны, нанимайте помощников и превращайте маленькую заправку в прибыльный бизнес!"
            },
            en: {
                title: "Gas Station Simulator - Stickman",
                desc: "A fun game about building your own gas station. Serve customers, upgrade your station, open a store, a café, and new areas, hire assistants, and turn your small gas station into a profitable business!"
            },
            fr: {
                title: "Jeu de simulation station-service - Stickman",
                desc: "Un jeu amusant sur le développement de sa propre station-service. Entretenez les véhicules, améliorez la station-service, ouvrez une boutique, un café et de nouvelles zones, embauchez des assistants et faites de cette petite station-service une entreprise prospère!"
            },
            es: {
                title: "Simulador de gasolinera - Stickman",
                desc: "Un divertido juego sobre el desarrollo de tu propia gasolinera. Haz el mantenimiento de los vehículos, mejora la estación, abre una tienda, una cafetería y nuevas zonas, contrata a ayudantes y convierte una pequeña gasolinera en un negocio rentable."
            },
            zh: {
                title: "火柴人加油站模拟器",
                desc: "一款轻松有趣的加油站经营游戏。为车辆提供服务，升级你的加油站，解锁商店、咖啡厅和更多功能区域。雇佣员工，优化运营，把小型加油站逐步发展成高收益商业帝国！"
            }
        }, {
            index: 16,
            name: "dinosaur_land",
            rate: 6,
            ru: {
                title: "Твоя ферма динозавров",
                desc: "Игра, где вы создаете и развиваете собственную ферму с динозаврами. Ухаживайте за доисторическими существами, расширяйте территорию, открывайте новые виды и превращайте ферму в настоящий парк динозавров."
            },
            en: {
                title: "Your Dinosaur Farm",
                desc: "A game where you build and grow your own dinosaur farm. Take care of prehistoric creatures, expand your territory, discover new species, and turn your farm into a real dinosaur park."
            },
            fr: {
                title: "Ta ferme de dinosaures",
                desc: "Un jeu pour construire son exploitation et élever des dinosaures. Prenez soin de créatures préhistoriques, agrandissez votre domaine, découvrez de nouvelles espèces et transformez votre ferme en un véritable parc de dinosaures."
            },
            es: {
                title: "Tu granja de dinosaurios",
                desc: "Un juego en el que creas y gestionas tu propia granja de dinosaurios. Cuida de las criaturas prehistóricas, amplía el territorio, descubre nuevas especies y convierte tu granja en un auténtico parque de dinosaurios."
            },
            zh: {
                title: "你的恐龙农场",
                desc: "打造并经营属于你的恐龙农场世界。悉心照顾史前巨兽，扩展你的领地，解锁更多恐龙物种，逐步将农场发展成壮观的恐龙主题乐园。"
            }
        }, {
            index: 17,
            name: "bear_shooter",
            rate: 0,
            ru: {
                title: "Шарики стрельба",
                desc: "Лопай шарики меткими выстрелами! Собирай комбинации, круши стеклянные пузыри и проходи уровни. Армия пузырей не устоит!"
            },
            en: {
                title: "Ball Shooting",
                desc: "Pop the bubbles with well-aimed shots! Make combinations, burst the glass bubbles, and beat the levels. The bubble army won't stand a chance!"
            },
            fr: {
                title: "Bubble Shooter",
                desc: "Faites éclater des bulles avec des tirs précis! Créez des combinaisons, faites éclater des bulles de verre et passez des niveaux. L'armée des bulles ne tiendra pas le coup!"
            },
            es: {
                title: "Tiro con bolas",
                desc: "¡Revienta las bolas con disparos precisos! Forma combinaciones, rompe burbujas de cristal y completa niveles. ¡El ejército de burbujas no resistirá!"
            },
            zh: {
                title: "泡泡射击",
                desc: "精准射击，击破彩色泡泡，完成连锁消除！组合强力连击，粉碎玻璃气泡，在关卡中不断突破。泡泡军团无法抵挡你的火力！"
            }
        }, {
            index: 18,
            name: "billiards",
            rate: 0,
            ru: {
                title: "Бильярд",
                desc: "Проверьте свою точность, рассчитывайте удары и станьте мастером бильярда."
            },
            en: {
                title: "Billiards",
                desc: "Test your accuracy, calculate your shots, and become a master of billiards."
            },
            fr: {
                title: "Billard",
                desc: "Testez votre précision, calculez vos coups et devenez un maître du billard."
            },
            es: {
                title: "Billar",
                desc: "Pon a prueba tu precisión, calcula tus golpes y conviértete en un maestro del billar."
            },
            zh: {
                title: "台球",
                desc: "考验你的精准度，计算每一次击球，成为台球大师。"
            }
        }, {
            index: 19,
            name: "nardi",
            rate: 0,
            ru: {
                title: "Нарды",
                desc: "Игра для двух игроков, цель игрока во время игры — бросая кости и передвигая шашки в соответствии с выпавшими очками, переместить все свои шашки в определенную область игрового поля раньше противника."
            },
            en: {
                title: "Backgammon",
                desc: "A game for two players. The objective is to roll the dice and move your checkers according to the numbers rolled, bringing all your checkers into the designated area of the board before your opponent."
            },
            fr: {
                title: "Backgammon",
                desc: "Un jeu pour deux joueurs. Le but est de lancer les dés et de déplacer ses pions selon les résultats obtenus afin d'amener tous ses pions dans la zone d'arrivée avant son adversaire."
            },
            es: {
                title: "Backgammon",
                desc: "Un juego para dos jugadores. El objetivo es lanzar los dados y mover las fichas según los puntos obtenidos, llevando todas tus fichas a la zona de destino antes que tu oponente."
            },
            zh: {
                title: "双陆棋",
                desc: "一款双人游戏。玩家需要掷骰子，并根据点数移动棋子，在对手之前将所有棋子移动到棋盘的目标区域。"
            }
        }],
        n = location.pathname.match(/_(\w+)\.html$/),
        r = n ? n[1] : "ru";
    var o;

    ! function(e) {
        e.forEach((e => {
            const s = `<div class="cards__item" data-graph-path="${e.index}">\n        <img class="cards__item__cover" src="img/${e.name}.jpg" alt="Cover" loading="lazy" decoding="async">\n        <div class="cards__item__info">\n          <h2 class="cards__item__info__title">${e[r]?.title||""}</h2>\n          <div class="cards__item__info__age">${e.rate}+</div>\n        </div>\n      </div>`;
            t.insertAdjacentHTML("beforeend", s)
        }))
    }(a),
    function(e) {
        e.forEach((e => {
            const t = `<div class="graph-modal__container" role="dialog" aria-modal="true" data-graph-target="${e.index}">\n\n      <div class="graph-modal__controls">\n\n          <button class="btn-reset button js-modal-close">\n            <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M12.7499 27.54L2.42658 17.2167C1.20742 15.9975 1.20742 14.0025 2.42658 12.7833L12.7499 2.45999" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            <p data-i18n="btnBack">Назад</p>\n          </button>\n\n          <button class="btn-reset button game-launcher" data-url="games/${e.name}/index.html">\n            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M13.9929 19.1484L18.0463 15.0951L13.9929 11.0417" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n              <path d="M1.83398 15.095H17.9365" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n              <path d="M14.5 2.33325C21.4983 2.33325 27.1667 7.08325 27.1667 14.9999C27.1667 22.9166 21.4983 27.6666 14.5 27.6666" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            <p data-i18n="btnPlay">Играть</p>\n          </button>\n\n      </div>\n\n      <div class="graph-modal__content">\n\n        <div class="graph-modal__title">\n          <h1 class="title">${e[r]?.title||""}</h1>\n          <p class="age">${e.rate}+</p>\n        </div>\n\n        <div class="graph-modal__info">\n          <div class="head">\n\n            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="5" viewBox="0 0 30 5" preserveAspectRatio="none">\n              <line x1="0" y1="3" x2="30" y2="3" />\n            </svg>\n\n            <h3 data-i18n="howPlay">Как играть</h3>\n\n            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="5" viewBox="0 0 30 5" preserveAspectRatio="none">\n              <line x1="0" y1="3" x2="30" y2="3" />\n            </svg>\n\n          </div>\n\n          <div class="info">\n            <p>${e[r]?.desc||""}</p>\n            <p data-i18n="control">Управление - тач</p>\n          </div>\n\n        </div>\n\n        <div class="graph-modal__screens">\n          <img data-src="img/${e.name}__screen_1.jpg" alt="screen" decoding="async" onerror="this.onerror=null;this.src='img/blanc.png'">\n          <img data-src="img/${e.name}__screen_2.jpg" alt="screen" decoding="async" onerror="this.onerror=null;this.src='img/blanc.png'">\n          <img data-src="img/${e.name}__screen_3.jpg" alt="screen" decoding="async" onerror="this.onerror=null;this.src='img/blanc.png'">\n        </div>\n\n      </div>\n    </div>`;
            s.insertAdjacentHTML("beforeend", t)
        }))
    }(a), o = r, document.querySelectorAll("[data-i18n]").forEach((e => {
            const t = e.dataset.i18n;
            i[o] && i[o][t] && (e.textContent = i[o][t])
        })), document.documentElement.lang = o,
        function(e) {
            if (!e) return;
            const t = e.textContent.trim(),
                s = [-9, 6, -4, 8, -6, 4, -10, 7, -3, 9, -7, 5],
                i = [0, -.06, .05, -.03, .07, -.05, .02, -.08, .04, -.02, .06, -.04];
            let a = 0;
            e.setAttribute("aria-label", t), e.textContent = "", t.split(/\s+/).forEach(((t, n) => {
                const r = document.createElement("span");
                r.className = "hero__word", r.setAttribute("aria-hidden", "true"), Array.from(t).forEach((e => {
                    const t = document.createElement("span");
                    t.className = "hero__letter", t.textContent = e, t.style.setProperty("--i", a), t.style.setProperty("--r", s[a % s.length] + "deg"), t.style.setProperty("--y", i[a % i.length] + "em"), t.dataset.color = a % 4, r.appendChild(t), a += 1
                })), n > 0 && e.appendChild(document.createTextNode(" ")), e.appendChild(r)
            })), e.classList.add("is-built"), e.addEventListener("click", (function(e) {
                const t = e.target.closest(".hero__letter");
                t && (t.classList.remove("is-jumping"), t.offsetWidth, t.classList.add("is-jumping"))
            })), e.addEventListener("animationend", (function(e) {
                e.target.classList.add("is-ready"), e.target.classList.remove("is-jumping")
            }))
        }(document.querySelector(".hero__title"));
    new class {
        constructor(e) {
            this.options = Object.assign({
                isOpen: () => {},
                isClose: () => {}
            }, e), this.modal = document.querySelector(".graph-modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events()
        }
        events() {
            this.modal && (document.addEventListener("click", function(e) {
                const t = e.target.closest("[data-graph-path]");
                if (t) {
                    let e = t.dataset.graphPath,
                        s = t.dataset.graphAnimation,
                        i = t.dataset.graphSpeed;
                    return this.animation = s || "fade", this.speed = i ? parseInt(i) : 300, this._nextContainer = document.querySelector(`[data-graph-target="${e}"]`), void this.open()
                }
                e.target.closest(".js-modal-close") && this.close()
            }.bind(this)), window.addEventListener("keydown", function(e) {
                27 == e.keyCode && this.isOpen && this.close(), 9 == e.which && this.isOpen && this.focusCatch(e)
            }.bind(this)), document.addEventListener("click", function(e) {
                e.target.classList.contains("graph-modal") && e.target.classList.contains("is-open") && this.close()
            }.bind(this)))
        }
        open(e) {
            if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
            this.modalContainer = this._nextContainer, e && (this.modalContainer = document.querySelector(`[data-graph-target="${e}"]`)), this.modalContainer.querySelectorAll("img[data-src]").forEach((e => {
                e.src = e.dataset.src, e.removeAttribute("data-src")
            })), this.modalContainer.scrollTo(0, 0), this.modal.style.setProperty("--transition-time", this.speed / 1e3 + "s"), this.modal.classList.add("is-open"), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.disableScroll(), this.modalContainer.classList.add("graph-modal-open"), this.modalContainer.classList.add(this.animation), setTimeout((() => {
                this.options.isOpen(this), this.modalContainer.classList.add("animate-open"), this.isOpen = !0, this.focusTrap()
            }), this.speed)
        }
        close() {
            this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("graph-modal-open"), this.enableScroll(), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()))
        }
        focusCatch(e) {
            const t = this.modalContainer.querySelectorAll(this._focusElements),
                s = Array.prototype.slice.call(t),
                i = s.indexOf(document.activeElement);
            e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()), e.shiftKey || i !== s.length - 1 || (s[0].focus(), e.preventDefault())
        }
        focusTrap() {
            const e = this.modalContainer.querySelectorAll(this._focusElements);
            this.isOpen ? e.length && e[0].focus() : this.previousActiveElement.focus()
        }
        disableScroll() {
            let e = window.scrollY;
            this.lockPadding(), document.body.classList.add("disable-scroll"), document.body.dataset.position = e, document.body.style.top = -e + "px"
        }
        enableScroll() {
            let e = parseInt(document.body.dataset.position, 10);
            this.unlockPadding(), document.body.style.top = "auto", document.body.classList.remove("disable-scroll"), window.scrollTo({
                top: e,
                left: 0
            }), document.body.removeAttribute("data-position")
        }
        lockPadding() {
            let e = window.innerWidth - document.body.offsetWidth + "px";
            this._fixBlocks.forEach((t => {
                t.style.paddingRight = e
            })), document.body.style.paddingRight = e
        }
        unlockPadding() {
            this._fixBlocks.forEach((e => {
                e.style.paddingRight = "0px"
            })), document.body.style.paddingRight = "0px"
        }
    }({
        isOpen: () => {
            console.log("Модальное окно открыто")
        },
        isClose: () => {
            console.log("Модальное окно закрыто")
        }
    }), document.addEventListener("click", (function(e) {
        const t = e.target.closest(".game-launcher");
        if (!t) return;
        const s = t.getAttribute("data-url"),
            i = document.getElementById("gameFrame"),
            a = document.querySelector(".game__container");
        s && i.src !== s && (i.src = s, a.classList.add("visible"))
    })), document.addEventListener("DOMContentLoaded", (function() {
        const e = document.querySelector(".game__container"),
            t = document.querySelector(".game__container__confirm"),
            s = document.getElementById("gameFrame"),
            i = document.querySelector(".button__game-close"),
            a = document.querySelector(".cancel-btn"),
            n = document.querySelector(".exit-btn"),
            r = document.querySelector(".close");
        i?.addEventListener("click", (function() {
            t?.classList.remove("is-hidden")
        })), a?.addEventListener("click", (function() {
            t?.classList.add("is-hidden")
        })), n?.addEventListener("click", (function() {
            s.src = "", e.classList.remove("visible"), t?.classList.add("is-hidden")
        })), r?.addEventListener("click", (function(e) {
            e.preventDefault(), "undefined" != typeof android && android.close && android.close()
        }))
    }))
})();