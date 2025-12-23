
// contents.js

// Four timed sections aligned to: 00:00, 00:00:42, 00:01:22, 00:02:08
export const contents = [
  {
    section: 'Characters',
    start: -1,
    end: 0,
    heading: 'Characters',
    paragraph:
      `'Billy Wind: A young Native American girl in Florida. She loved science and dreamed of becoming a scientist, but she did not believe the old stories that the earth could talk. The elders of her tribe were disappointed when she told them she did not believe.',
      'Elders: The respected older members of Billy’s tribe who believed in the wisdom of the earth and wanted Billy to understand its importance.'
      'Animals: Various creatures in the Everglades, including alligators, turtles, and birds, that demonstrated how to survive in nature and communicated important messages about the environment.'
       'Nature/Earth: The natural world that Billy learns to listen to, including the wind, animals, and changing land, which conveys important lessons about connection and balance in the environment.'`,
    words: [
      { term: 'Billy Wind', meaning: 'بيلي ويند: فتاة أمريكية أصلية شابة في فلوريدا تحب العلم وتحلم بأن تصبح عالمة.' },
      { term: 'Elders', meaning: 'الكبار المُحترمون في المجتمع أو القبيلة الذين يقدمون الإرشاد.' },
      { term: 'Animals', meaning: 'مخلوقات مختلفة في إيفرجلادز، بما في ذلك التماسيح والسلاحف والطيور.' },
      { term: 'Nature/Earth', meaning: 'العالم الطبيعي الذي تتعلم بيلي الاستماع إليه، بما في ذلك الرياح والحيوانات والأرض المتغيرة.' },
    ],
    mcqs: [
      {
        question: 'Who is Billy Wind?',
        options: [
          'A scientist studying animals',
          'A young Native American girl in Florida',
          'A young Native American girl who loved maths',
          'A young Native American girl who believed the earth could talk'
        ],
        answer: 'A young Native American girl in Florida',
      },
      {
        question: 'Who are the elders in Billy’s tribe?',
        options: [
          'Young members of the tribe',
          'Respected older members who provide guidance',
          'Animals that live in the Everglades',
          'Scientists studying nature'
        ],
        answer: 'Respected older members who provide guidance',
      },
      {
        question: 'What role do animals play in the story?',
        options: [
          'They are pets of Billy',
          'They are friends of Billy',
          'They are teachers of Billy',
          'They are enemies of Billy'
        ],
        answer: 'They are teachers of Billy',
      },
      {
        question: 'What does nature/earth represent in the story?',
        options: [
          'A place to explore',
          'A source of food',
          'A teacher that conveys important lessons',
          'A dangerous environment'
        ],
        answer: 'A teacher that conveys important lessons',
      }
    ],
    fills: [
      {
        sentence: 'Billy Wind is a young ____ girl in Florida.',
        answer: 'Native American'
      },
      {
        sentence: 'Billy dreamed of becoming a ____ when she grew up.',
        answer: 'scientist'
      },
      {
        sentence: 'Her family believed the earth could talk and share ____.',
        answer: 'wisdom'
      },
      {
        sentence: 'The ____ were disappointed when Billy said she did not believe.',
        answer: 'elders'
      }
    ],

  },
  {
    section: 'Section 1',
    start: 0,
    end: 42,
    heading: 'Billy doubts the talking earth',
    paragraph:
      'Billy Wind was a young Native American girl in Florida. She loved science and dreamed of becoming a scientist, but she did not believe the old stories that the earth could talk. The elders of her tribe were disappointed when she told them she did not believe.',
    words: [
      { term: 'Native American', meaning: 'أمريكية أصلية' },
      { term: 'Scientist', meaning: 'عالم' },
      { term: 'Wisdom', meaning: 'الحكمة' },
      { term: 'Elders', meaning: 'الكبار المُحترمون في المجتمع أو القبيلة الذين يقدمون الإرشاد.' },
    ],
    mcqs: [
      {
        question: 'At the beginning, what did Billy Wind believe about the earth?',
        options: [
          'It could talk and share wisdom with people',
          'It only spoke to animals',
          'Old stories had no real meaning, and the earth could not talk',
          'It talked only through written messages',
        ],
        answer: 'Old stories had no real meaning, and the earth could not talk',
      },
      {
        question: 'How did the elders of Billy’s tribe feel when she said she did not believe the earth could talk?',
        options: ['They were happy', 'They were disappointed', 'They were indifferent', 'They were confused'],
        answer: 'They were disappointed',
      },
      {
        question: 'What was Billy’s dream for her future?',
        options: [
          'To become a teacher',
          'To become a scientist',
          'To become an artist',
          'To become a musician',
        ],
        answer: 'To become a scientist',
      },
      {
        question: 'What is the main idea of this section?',
        options: [
          'Billy’s love for animals',
          'Billy’s disbelief in the talking earth and her scientific aspirations',
          'The elders’ stories about the earth',
          'The importance of nature conservation',
        ],
        answer: 'Billy’s disbelief in the talking earth and her scientific aspirations',
      },
      {
        question: 'What cultural background does Billy Wind belong to?',
        options: [
          'African American',
          'Native American',
          'Asian American',
          'Hispanic American',
        ],
        answer: 'Native American',
      },
      {
        question: 'What did Billy love?',
        options: [
          'Art',
          'Science',
          'Music',
          'Sports',
        ],
        answer: 'Science',
      }
    ],
    fills: [
      { sentence: 'Billy Wind was a young ____ girl who lived in Florida.', answer: 'Native American' },
      { sentence: 'Billy dreamed of becoming a ____ when she grew up.', answer: 'scientist' },
      { sentence: 'Her family believed the earth could talk and share ____.', answer: 'wisdom' },
      { sentence: 'The ____ were disappointed when Billy said she did not believe.', answer: 'elders' },
      { sentence: 'Billy did not ____ the old stories about the talking earth.', answer: 'believe' },
      { sentence: 'Billy loved ____, which is the study of the natural world.', answer: 'science' },

    ],
  },

  {
    section: 'Section 2',
    start: 42,
    end: 82,
    heading: 'Journey into the Everglades',
    paragraph:
      'The elders told Billy to go alone into Everglades National Park and listen to the earth. She packed her canoe and entered the swamp, afraid and without shelter or food.',
    words: [
      { term: 'Everglades National Park', meaning: 'محمية مائية واسعة في جنوب فلوريدا تُعرف بتنوع الحياة البرية والنظم البيئية.' },
      { term: 'Canoe', meaning: 'قارب ضيق وخفيف، غالباً ما يُدفع بالزلاجات في الأنهار أو المناطق الرطبة.' },
      { term: 'Shelter', meaning: 'مكان يوفر الحماية من الطقس أو الخطر.' },
      { term: 'Swamp', meaning: 'منطقة رطبة تحتوي على مياه ساكنة وأشجار.' },
    ],
    mcqs: [
      {
        question: 'Where did the elders send Billy to listen to the earth?',
        options: ['City museum', 'Everglades National Park', 'Mountain camp', 'Classroom lab'],
        answer: 'Everglades National Park',
      },
      {
        question: 'What did Billy pack at the start of her journey?',
        options: ['A tent', 'A canoe', 'A bicycle', 'A surfboard'],
        answer: 'A canoe',
      },
      {
        question: 'How did Billy feel as she entered the swamp?',
        options: ['Excited and prepared', 'Afraid and without shelter or food', 'Confident and well-equipped', 'Happy and carefree'],
        answer: 'Afraid and without shelter or food',
      },
      {
        question: 'What is the Everglades National Park known for?',
        options: [
          'Desert landscapes',
          'Diverse wildlife and ecosystems',
          'Mountain ranges',
          'Urban development',
        ],
        answer: 'Diverse wildlife and ecosystems',
      },
      {
        question: 'What type of boat did Billy use to enter the swamp?',
        options: [
          'Kayak',
          'Canoe',
          'Rowboat',
          'Sailboat',
        ],
        answer: 'Canoe',
      },
      {
        question: 'What challenges did Billy face when she entered the swamp?',
        options: [
          'Lack of navigation tools',
          'No shelter or food',
          'Harsh weather conditions',
          'Dangerous animals',
        ],
        answer: 'No shelter or food',
      },
      {
        question: 'What was Billy’s main task in the Everglades?',
        options: [
          'To collect scientific data',
          'To listen to the earth',
          'To build a shelter',
          'To find food',
        ],
        answer: 'To listen to the earth', 
      }
    ],
    fills: [
      { sentence: 'They sent Billy into the ____ National Park to listen.', answer: 'Everglades' },
      { sentence: 'Billy packed her ____ and went into the Everglades.', answer: 'canoe' },
      { sentence: 'At first, Billy had no food, no ____, and no help.', answer: 'shelter' },
      { sentence: 'A ____ is a wet area with water and trees.', answer: 'swamp' },
      { sentence: 'Billy felt ____ as she entered the swamp alone.', answer: 'afraid' },
      { sentence: 'The Everglades is known for its diverse ____ and ecosystems.', answer: 'wildlife' },
      { sentence: 'Billy used a ____ to navigate through the swamp waters.', answer: 'canoe' },
      { sentence: 'Billy had to survive without ____ or shelter.', answer: 'food' },
      { sentence: 'The elders wanted Billy to ____ to the earth in the Everglades.', answer: 'listen' },
    ],
  },

  {
    section: 'Section 3',
    start: 82,
    end: 128,
    heading: 'Listening to the animals',
    paragraph:
      'At night she heard alligators splashing and owls hooting. Watching closely, Billy saw how animals survived: alligators waited patiently for food to conserve energy; turtles hid in their shells when danger was near; birds warned each other of attacks.',
    words: [
      { term: 'Alligator', meaning: 'التمساح، حيوان بحري كبير يعيش في المناطق الرطبة.' },
      { term: 'Owl (hooting)', meaning: 'بومة' },
      { term: 'Turtle shell', meaning: 'صدفة السلحفاة' },
      { term: 'Warn', meaning: 'يُحذّر الآخرين من الخطر قبل أن يحدث.' },
      { term: 'Attack', meaning: 'يُهاجم الآخرين أو يحاول إيذائهم.' },
      { term: 'Patiently', meaning: 'الانتظار بصبر دون التسرع؛ توفير الطاقة.' },
      { term: 'Energy', meaning: 'الجهد أو القوة المستخدمة في العمل؛ في الطبيعة، غالبًا ما تُحفظ للبقاء.' },
    ],
    mcqs: [
      {
        question: 'Which animal waited patiently for food to conserve energy?',
        options: ['Owls', 'Turtles', 'Birds', 'Alligators'],
        answer: 'Alligators',
      },
      {
        question: 'What did turtles do when danger was near?',
        options: ['Warned each other', 'Hid in their shells', 'Attacked predators', 'Flew away'],
        answer: 'Hid in their shells',
      },
      {
        question: 'What did birds do when a predator approached?',
        options: ['Slept', 'Warned each other', 'Built shelter', 'Dived underwater'],
        answer: 'Warned each other',
      },
      {
        question: 'What lesson did Billy learn from watching the animals?',
        options: [
          'Animals are dangerous',
          'Animals have unique survival strategies',
          'Animals do not communicate',
          'Animals are not important in nature',
        ],
        answer: 'Animals have unique survival strategies',
      },
      {
        question: 'How did the alligators conserve their energy?',
        options: [
          'By hiding in the water',
          'By waiting patiently for food',
          'By swimming fast',
          'By hunting constantly',  
        ],
        answer: 'By waiting patiently for food',
        }
    ],
    fills: [
      { sentence: 'At night, she heard ____ splashing in the water.', answer: 'alligators' },
      { sentence: 'The ____ hooted in the trees as Billy felt afraid.', answer: 'owls' },
      { sentence: 'Turtles hid in their ____ when danger was near.', answer: 'shells' },
      { sentence: 'Birds ____ each other of approaching attacks.', answer: 'warned' },
      { sentence: 'Alligators waited ____ for food to save energy.', answer: 'patiently' },
      { sentence: 'Billy learned that animals have different ways to ____.', answer: 'survive' },
    ],
  },

  {
    section: 'Section 4',
    start: 128,
    end: 100000,
    heading: 'Understanding nature’s voice',
    paragraph:
      'After many days, Billy was no longer afraid. She learned to survive and, more importantly, to listen. The earth spoke through wind, animals, and changing land. Everything in nature is connected; without care, the balance is broken.',
    words: [
      { term: 'Connected', meaning: 'مرتبط أو مترابط؛ أجزاء الطبيعة تؤثر على بعضها البعض.' },
      { term: 'Balance', meaning: 'حالة مستقرة حيث لا تُخلّل الأنظمة الطبيعية.' },
      { term: 'Wild', meaning: 'بيئات طبيعية بعيدة عن سيطرة الإنسان.' },
      { term: 'Care', meaning: 'الاهتمام والحماية للحفاظ على الطبيعة.' },
      { term: 'Survive', meaning: 'البقاء على قيد الحياة في ظروف صعبة.' },
      { term: 'Voice', meaning: 'طريقة التعبير أو التواصل؛ في الطبيعة، يشير إلى الرسائل التي تنقلها البيئة.' },
      { term: 'Changing land', meaning: 'التغيرات في التضاريس الطبيعية التي تشير إلى العمليات البيئية.' },
      { term: 'Wind', meaning: 'حركة الهواء التي يمكن أن تنقل الأصوات والرسائل في الطبيعة.' },
    ],
    mcqs: [
      {
        question: 'Besides survival skills, what did Billy learn?',
        options: ['How to build a city', 'To listen to nature', 'To ignore animal sounds', 'To fear the dark'],
        answer: 'To listen to nature',
      },
      {
        question: 'How did the earth “talk,” according to Billy’s realization?',
        options: [
          'Written words on leaves',
          'Wind sounds, animal movements, and changes in the land',
          'Only through thunder',
          'Radio signals',
        ],
        answer: 'Wind sounds, animal movements, and changes in the land',
      },
      {
        question: 'What is a central theme of the story?',
        options: [
          'Nature is chaotic and meaningless',
          'Everything in nature is connected',
          'Humans never learn from animals',
          'Science and nature cannot coexist',
        ],
        answer: 'Everything in nature is connected',
      },
      {
        question: 'What happens if people do not care for nature?',
        options: ['Nothing changes', 'The balance is broken', 'Animals stop moving', 'It rains forever'],
        answer: 'The balance is broken',
      },
    ],
    fills: [
            { sentence: 'Billy learned that everything in nature was ____.', answer: 'connected' },
            { sentence: 'Without ____, the balance of nature is broken.', answer: 'care' },
            { sentence: 'Billy learned to ____ in the wild.', answer: 'survive' },
            { sentence: 'The earth spoke through wind, ____, and changing land.', answer: 'animals' },
            { sentence: 'The ____ is the movement of air that can carry sounds.', answer: 'wind' },
            { sentence: 'Changes in the ____ can indicate environmental processes.', answer: 'land' },
    ],
  },
];

// (Optional) export in case you want to reuse video id elsewhere:
export const VIDEO_ID = 'C8yN9eqhQjo'; // Replace with your actual YouTube video ID
