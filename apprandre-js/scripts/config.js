// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["facile", "sincère", "chaleureux", "doux", "brillant", "lumineux", "heureux", "intelligent", "simple", "puissant", "joyeux", "prudent", "calme", "rapide", "modeste", "écouter", "diligent", "conscient", "incroyable", "respectueux", "affectueux", "créatif", "optimiste", "patient", "charmant", "attentif", "imaginatif", "courageux", "déterminé", "rassurant", "efficace", "persévérant", "audacieux", "solide", "rigoureux", "souple", "dynamique", "réfléchi", "considéré", "dévoué", "pragmatique", "compétent", "proactif", "confiant", "serré", "modéré", "décent", "habile", "fiable", "concret", "équilibré", "sympathique", "actif", "endurant", "heureux", "réel", "analytique", "mature", "réussi", "libre", "naturel", "obstiné", "adaptable", "perspicace", "respecté", "visionnaire", "astucieux", "novateur", "extraverti", "calculé", "mélodieux", "méthodique", "interprétable", "fervent", "exemplaire", "décent", "brillant", "austère", "cohérent", "exemplaire", "créatif", "reconnaissant", "réconfortant", "discret", "nuancé", "solitaire", "réfléchi", "éthique", "pragmatique", "neutre", "intuitif", "analytique", "légaliste", "fondamental", "justifié", "pratique", "serein", "intègre", "optimal", "solennel", "affable", "affectif", "précis", "mémorable", "subtile", "générosité", "correct", "appliqué", "ferme", "logique", "disposé", "ordonné", "attentif", "subordonné", "tactile", "novateur", "réceptif", "philanthropique", "épique", "sympathique", "infatigable", "consistant", "serviable", "dépensier", "clairvoyant", "respectable", "coupable", "dévot", "patiente", "pertinent", "dévoué", "faible", "endurant", "élégant", "subversif", "prouvé", "téméraire", "favorable", "censuré", "ambitieux", "légitime", "fonctionnel", "harmonieux", "diplomate", "reconnaissant", "calculateur", "insouciant", "vif", "pénible", "troublant", "persuasif", "malicieux", "distrait", "sophistiqué", "transcendant", "ambivalent", "discret", "artificiel", "proactif", "exacerbé", "suspensif", "indivisible", "cérébral", "substantiel", "compliqué", "énigmatique", "introverti", "solitaire", "ornemental", "mélancolique", "irréductible", "stochastique", "légendaire", "confus", "archaïque", "irrationnel", "dystopique", "abstrus", "epanorthose", "volubile", "impérialiste", "inéluctable", "perturbateur", "introspectif"]



    
const listePhrases = ["Le chat dort sur le canapé.",
    "Le soleil brille dans le ciel bleu.",
    "Je mange une pomme rouge.",
    "Les oiseaux chantent dans les arbres.",
    "Elle lit un livre intéressant.",
    "Nous allons à l'école tous les matins.",
    "Il fait froid dehors ce matin.",
    "Les enfants jouent dans le parc.",
    "Le vent souffle doucement dans les feuilles.",
    "Je prends un café chaud chaque matin.",
    "La mer est calme aujourd'hui.",
    "Elle porte une robe bleue.",
    "Il y a un grand arbre dans le jardin.",
    "Nous avons un chien qui aime courir.",
    "Les fleurs dans le jardin sont colorées.",
    "Le ciel est rempli de nuages gris.",
    "Je vais faire mes devoirs après le dîner.",
    "Les poissons nagent dans l'aquarium.",
    "Il pleut depuis ce matin.",
    "Je fais une promenade tous les soirs.",
    "Nous avons mangé de délicieuses pizzas hier soir.",
    "Les étoiles brillent dans la nuit.",
    "Le gâteau au chocolat est délicieux.",
    "Je regarde un film au cinéma ce soir.",
    "Les montagnes sont couvertes de neige en hiver.",
    "Le train part à 9 heures précises.",
    "Le parc est très calme en hiver.",
    "Les oiseaux volent dans le ciel bleu.",
    "Il y a une belle vue depuis la fenêtre.",
    "Les enfants jouent à cache-cache dans le jardin.",
    "Le vent souffle fort sur la plage.",
    "Les feuilles tombent des arbres en automne.",
    "J'aime faire du vélo le week-end.",
    "Elle porte des lunettes de soleil.",
    "Le matin, il fait toujours frais.",
    "Les voitures roulent vite sur l'autoroute.",
    "Le cheval court dans le champ.",
    "Le gâteau est prêt à être servi.",
    "Je vais à la bibliothèque chaque samedi.",
    "Les fleurs embaument l'air du jardin.",
    "Les nuages se déplacent lentement dans le ciel.",
    "Il y a un pont au-dessus de la rivière.",
    "Les enfants se cachent derrière les buissons.",
    "Je bois de l'eau après ma course.",
    "Le chat chasse un oiseau dans le jardin.",
    "Je vais à l'école en bus tous les jours.",
    "Les arbres sont magnifiques en automne.",
    "Elle a une voix douce et agréable.",
    "Les oiseaux se réveillent dès le matin.",
    "Je prends mon petit-déjeuner avant de partir.",
    "Le soleil se couche derrière les montagnes.",
    "Les poissons dans le lac nagent lentement.",
    "Je marche sous la pluie avec mon parapluie.",
    "Les étoiles scintillent dans l'obscurité.",
    "Il y a un lac au bout du chemin.",
    "Je vais au marché chaque samedi matin.",
    "Les enfants courent autour de l'arbre.",
    "Les fleurs s'ouvrent au printemps.",
    "Elle a un sourire charmant.",
    "Je mange des fruits tous les jours.",
    "Le vent est fort, il souffle sur la mer.",
    "Les vagues frappent les rochers.",
    "Le ciel devient rouge au coucher du soleil.",
    "Les pommes tombent des arbres en automne.",
    "Je prépare un déjeuner léger.",
    "Le vent fait bouger les branches des arbres.",
    "Les oiseaux migrent vers le sud.",
    "Je vais chez mes grands-parents le week-end.",
    "Les animaux de la ferme mangent de l'herbe.",
    "Je fais une sieste l'après-midi.",
    "Le chemin est long mais agréable.",
    "Le matin, je prends un thé au citron.",
    "Le chat miaule pour sortir.",
    "Elle écrit des lettres à ses amis.",
    "Le train arrive dans cinq minutes.",
    "Les couleurs de l'automne sont magnifiques.",
    "Les enfants chantent des chansons de Noël.",
    "Il y a une pluie légère ce soir.",
    "Les plantes du jardin ont besoin d'eau.",
    "Le vent souffle sur les champs de blé.",
    "Les oiseaux volent en formation.",
    "Je cueille des fleurs dans le champ.",
    "Les étoiles brillent plus fort que d'habitude.",
    "Les nuages commencent à se dissiper.",
    "Je pars en vacances à la montagne.",
    "Les arbres grandissent lentement, mais sûrement.",
    "Les chevaux se baignent dans le ruisseau.",
    "Le matin, l'air est frais et pur.",
    "Les champignons poussent dans la forêt.",
    "Le vent souffle fort au sommet de la colline.",
    "Les étoiles se déplacent dans le ciel nocturne.",
    "Je dois traverser un pont pour arriver à la maison.",
    "Les abeilles butinent les fleurs du jardin.",
    "Les oiseaux volent au-dessus de l'océan.",
    "Le soleil se lève tôt en été.",
    "Les herbes hautes bougent sous la brise.",
    "Je me perds parfois dans la forêt.",
    "Les nuages ont pris une forme étrange ce matin.",
    "Le chemin est difficile mais excitant.",
    "Les rivières changent de direction au fil du temps.",
    "Le paysage est magnifique au crépuscule.",
    "Je cherche des trésors dans les ruines anciennes.",
    "Les montagnes se dessinent à l'horizon comme des ombres géantes.",
    "Les vagues de l'océan viennent caresser les pieds des promeneurs.",
    "Les arbres dans la forêt sont vieux de plusieurs siècles.",
    "Les racines des arbres s'enfoncent profondément dans le sol.",
    "Les orages d'été apportent de fortes pluies.",
    "Le brouillard enveloppe la vallée chaque matin.",
    "Les couleurs du coucher de soleil sont plus vives en hiver.",
    "Je contemple le paysage depuis le sommet de la montagne.",
    "Les pierres antiques portent des inscriptions mystérieuses.",
    "Les vents froids soufflent sur les terres désertiques.",
    "Les ruines du château sont couvertes de mousse.",
    "Les poissons dans le lac se cachent sous les pierres.",
    "Le vent transporte les sons d'une autre époque.",
    "Les ombres des arbres s'étendent à l'infini dans la forêt.",
    "Les montagnes englouties dans la brume ont un aspect irréel.",
    "Les étoiles s'alignent parfois pour former des constellations invisibles.",
    "Les vieilles pierres des églises racontent des histoires oubliées.",
    "Les ruisseaux souterrains cachent des trésors de cristaux.",
    "Le lac semble sans fin, reflet du ciel et des montagnes.",
    "Les racines des vieux arbres s'entrelacent comme un labyrinthe.",
    "Les vagues frappent les falaises avec une force infinie.",
    "Le vent secoue les branches des arbres centenaires.",
    "Les étoiles de la nuit murmurent des secrets que seuls les sages peuvent entendre.",
    "Le vent dans les montagnes porte des chants anciens, oubliés depuis des millénaires.",
    "Les pierres gravées d'anciennes runes révèlent des mystères insondables.",
    "Les oiseaux nocturnes émettent des sons mystérieux dans la nuit.",
    "Les éléments semblent s'affronter dans une danse éternelle de lumière et de ténèbres.",
    "Les fissures dans la terre témoignent des puissantes forces de la nature.",
    "Les ruines d'anciennes civilisations parlent dans le silence de la poussière.",
    "Les ombres dans la forêt forment des formes inquiétantes, presque humaines.",
    "Les montagnes au loin semblent impossibles à atteindre, comme un mirage.",
    "Les cristaux dans les cavernes brillent d'une lumière surnaturelle.",
    "Les murmures des vents sont des échos d'histoires passées.",
    "Les étoiles filantes laissent des traces de lumière éphémères dans l'immensité du ciel.",
    "Les pierres précieuses cachées sous la terre attendent patiemment d'être découvertes.",
    "Les ombres anciennes du château se dressent comme des géants oubliés.",
    "Le silence de la forêt est lourd, comme si elle attendait quelque chose.",
    "Les chemins mystérieux qui serpentent dans la forêt mènent à des endroits inaccessibles.",
    "Les vents d'hiver apportent avec eux des souvenirs du passé, qui flottent dans l'air glacé.",
    "Le rugissement de la mer résonne dans les grottes sous-marines, comme une voix ancienne qui ne cesse de parler.",
    "Les lointaines montagnes semblent veiller sur le monde, invisibles mais omniprésentes.",
    "Les étoiles, comme des yeux brillants, surveillent le monde depuis leur royaume lointain.",
    "Les forêts profondes cachent des secrets qui ne peuvent être dévoilés que par les voyageurs courageux.",
    "Les pierres anciennes du temple émettent une énergie étrange, comme un appel à l'aventure.",
    "Les silhouettes des arbres dans la brume matinale semblent se mouvoir comme des spectres.",
    "Les voiles des navires se déchiraient sous l'assaut du vent impitoyable, mais ils continuaient leur route.",
    "Les nuits étoilées au sommet de la montagne portent des promesses mystérieuses et inaccessibles."
    ]

