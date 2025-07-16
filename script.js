// بيانات الدول مع معلومات عما تشتهر به
const countriesData = {
    'United States': {
        capital: 'واشنطن',
        population: '331 مليون',
        area: '9.8 مليون كم²',
        currency: 'دولار أمريكي',
        languages: 'الإنجليزية',
        famous: 'هوليوود، ناطحات السحاب، التكنولوجيا'
    },
    'Saudi Arabia': {
        capital: 'الرياض',
        population: '35 مليون',
        area: '2.1 مليون كم²',
        currency: 'ريال سعودي',
        languages: 'العربية',
        famous: 'النفط، الحرمين الشريفين، الصحراء'
    },
    'Germany': {
        capital: 'برلين',
        population: '83 مليون',
        area: '357 ألف كم²',
        currency: 'يورو',
        languages: 'الألمانية',
        famous: 'السيارات، البيرة، الهندسة'
    },
    'France': {
        capital: 'باريس',
        population: '67 مليون',
        area: '643 ألف كم²',
        currency: 'يورو',
        languages: 'الفرنسية',
        famous: 'برج إيفل، الموضة، النبيذ'
    },
    'United Kingdom': {
        capital: 'لندن',
        population: '67 مليون',
        area: '243 ألف كم²',
        currency: 'جنيه إسترليني',
        languages: 'الإنجليزية',
        famous: 'الملكة، الشاي، شكسبير'
    },
    'Italy': {
        capital: 'روما',
        population: '60 مليون',
        area: '301 ألف كم²',
        currency: 'يورو',
        languages: 'الإيطالية',
        famous: 'البيتزا، الكولوسيوم، الفن'
    },
    'Spain': {
        capital: 'مدريد',
        population: '47 مليون',
        area: '505 ألف كم²',
        currency: 'يورو',
        languages: 'الإسبانية',
        famous: 'الفلامنكو، كرة القدم، الباييا'
    },
    'Brazil': {
        capital: 'برازيليا',
        population: '215 مليون',
        area: '8.5 مليون كم²',
        currency: 'ريال برازيلي',
        languages: 'البرتغالية',
        famous: 'كرة القدم، الكرنفال، الأمازون'
    },
    'India': {
        capital: 'نيودلهي',
        population: '1.4 مليار',
        area: '3.3 مليون كم²',
        currency: 'روبية هندية',
        languages: 'الهندية، الإنجليزية',
        famous: 'تاج محل، البوليوود، التوابل'
    },
    'Russia': {
        capital: 'موسكو',
        population: '146 مليون',
        area: '17.1 مليون كم²',
        currency: 'روبل روسي',
        languages: 'الروسية',
        famous: 'الباليه، الفودكا، الشتاء القارس'
    },
    'Canada': {
        capital: 'أوتاوا',
        population: '38 مليون',
        area: '9.9 مليون كم²',
        currency: 'دولار كندي',
        languages: 'الإنجليزية، الفرنسية',
        famous: 'شراب القيقب، الهوكي، الطبيعة'
    },
    'Australia': {
        capital: 'كانبرا',
        population: '25 مليون',
        area: '7.7 مليون كم²',
        currency: 'دولار أسترالي',
        languages: 'الإنجليزية',
        famous: 'الكنغر، الحاجز المرجاني، الصحراء'
    },
    'Mexico': {
        capital: 'مكسيكو سيتي',
        population: '128 مليون',
        area: '1.9 مليون كم²',
        currency: 'بيزو مكسيكي',
        languages: 'الإسبانية',
        famous: 'التاكو، الأهرامات، التكيلا'
    },
    'Egypt': {
        capital: 'القاهرة',
        population: '104 مليون',
        area: '1 مليون كم²',
        currency: 'جنيه مصري',
        languages: 'العربية',
        famous: 'الأهرامات، النيل، الفراعنة'
    },
    'Turkey': {
        capital: 'أنقرة',
        population: '84 مليون',
        area: '783 ألف كم²',
        currency: 'ليرة تركية',
        languages: 'التركية',
        famous: 'آيا صوفيا، الكباب، البوسفور'
    },
    'South Korea': {
        capital: 'سيول',
        population: '52 مليون',
        area: '100 ألف كم²',
        currency: 'وون كوري',
        languages: 'الكورية',
        famous: 'الكيبوب، السامسونغ، الكيمتشي'
    },
    'Argentina': {
        capital: 'بوينس آيرس',
        population: '45 مليون',
        area: '2.7 مليون كم²',
        currency: 'بيزو أرجنتيني',
        languages: 'الإسبانية',
        famous: 'التانغو، كرة القدم، اللحوم'
    },
    'South Africa': {
        capital: 'كيب تاون',
        population: '60 مليون',
        area: '1.2 مليون كم²',
        currency: 'راند جنوب أفريقي',
        languages: 'الإنجليزية، الأفريكانية',
        famous: 'السفاري، الماس، نيلسون مانديلا'
    },
    'Thailand': {
        capital: 'بانكوك',
        population: '70 مليون',
        area: '513 ألف كم²',
        currency: 'بات تايلندي',
        languages: 'التايلندية',
        famous: 'المعابد، الطعام الحار، الفيلة'
    },
    'Greece': {
        capital: 'أثينا',
        population: '10.7 مليون',
        area: '131 ألف كم²',
        currency: 'يورو',
        languages: 'اليونانية',
        famous: 'الأكروبوليس، الفلسفة، الجزر'
    },
    'Netherlands': {
        capital: 'أمستردام',
        population: '17.4 مليون',
        area: '41 ألف كم²',
        currency: 'يورو',
        languages: 'الهولندية',
        famous: 'طواحين الهواء، التوليب، الدراجات'
    },
    'Switzerland': {
        capital: 'برن',
        population: '8.7 مليون',
        area: '41 ألف كم²',
        currency: 'فرنك سويسري',
        languages: 'الألمانية، الفرنسية، الإيطالية',
        famous: 'الجبال، الساعات، الشوكولاتة'
    },
    'Norway': {
        capital: 'أوسلو',
        population: '5.4 مليون',
        area: '385 ألف كم²',
        currency: 'كرونة نرويجية',
        languages: 'النرويجية',
        famous: 'الفيوردات، الشفق القطبي، النفط'
    },
    'Sweden': {
        capital: 'ستوكهولم',
        population: '10.4 مليون',
        area: '450 ألف كم²',
        currency: 'كرونة سويدية',
        languages: 'السويدية',
        famous: 'إيكيا، فولفو، نوبل'
    },
    'Denmark': {
        capital: 'كوبنهاغن',
        population: '5.8 مليون',
        area: '43 ألف كم²',
        currency: 'كرونة دنماركية',
        languages: 'الدنماركية',
        famous: 'ليغو، حورية البحر الصغيرة، الفايكنغ'
    },
    'Finland': {
        capital: 'هلسنكي',
        population: '5.5 مليون',
        area: '338 ألف كم²',
        currency: 'يورو',
        languages: 'الفنلندية، السويدية',
        famous: 'نوكيا، الساونا، بابا نويل'
    },
    'Iceland': {
        capital: 'ريكيافيك',
        population: '370 ألف',
        area: '103 ألف كم²',
        currency: 'كرونة آيسلندية',
        languages: 'الآيسلندية',
        famous: 'الينابيع الحارة، الشفق القطبي، البراكين'
    },
    'New Zealand': {
        capital: 'ويلينغتون',
        population: '5.1 مليون',
        area: '268 ألف كم²',
        currency: 'دولار نيوزيلندي',
        languages: 'الإنجليزية، الماورية',
        famous: 'سيد الخواتم، الخراف، الطبيعة'
    },
    'Morocco': {
        capital: 'الرباط',
        population: '37 مليون',
        area: '446 ألف كم²',
        currency: 'درهم مغربي',
        languages: 'العربية، الأمازيغية',
        famous: 'مراكش، الطاجين، الصحراء'
    },
    'Kenya': {
        capital: 'نيروبي',
        population: '54 مليون',
        area: '580 ألف كم²',
        currency: 'شلن كيني',
        languages: 'السواحيلية، الإنجليزية',
        famous: 'السفاري، الماراثون، القهوة'
    },
    'Nigeria': {
        capital: 'أبوجا',
        population: '218 مليون',
        area: '923 ألف كم²',
        currency: 'نايرا نيجيرية',
        languages: 'الإنجليزية',
        famous: 'نوليوود، النفط، التنوع الثقافي'
    },
    'Peru': {
        capital: 'ليما',
        population: '33 مليون',
        area: '1.2 مليون كم²',
        currency: 'سول بيروفي',
        languages: 'الإسبانية، الكيتشوا',
        famous: 'ماتشو بيتشو، الألباكا، الإنكا'
    },
    'Chile': {
        capital: 'سانتياغو',
        population: '19 مليون',
        area: '756 ألف كم²',
        currency: 'بيزو تشيلي',
        languages: 'الإسبانية',
        famous: 'النبيذ، صحراء أتاكاما، النحاس'
    },
    'Colombia': {
        capital: 'بوغوتا',
        population: '51 مليون',
        area: '1.1 مليون كم²',
        currency: 'بيزو كولومبي',
        languages: 'الإسبانية',
        famous: 'القهوة، الزمرد، الكوكايين'
    },
    'Venezuela': {
        capital: 'كاراكاس',
        population: '28 مليون',
        area: '912 ألف كم²',
        currency: 'بوليفار فنزويلي',
        languages: 'الإسبانية',
        famous: 'النفط، شلالات أنخيل، الجمال'
    },
    'Indonesia': {
        capital: 'جاكرتا',
        population: '273 مليون',
        area: '1.9 مليون كم²',
        currency: 'روبية إندونيسية',
        languages: 'الإندونيسية',
        famous: 'بالي، البراكين، التوابل'
    },
    'Malaysia': {
        capital: 'كوالالمبور',
        population: '33 مليون',
        area: '329 ألف كم²',
        currency: 'رينغيت ماليزي',
        languages: 'الماليزية',
        famous: 'البتروناس، الطعام، التنوع'
    },
    'Singapore': {
        capital: 'سنغافورة',
        population: '5.9 مليون',
        area: '719 كم²',
        currency: 'دولار سنغافوري',
        languages: 'الإنجليزية، الماليزية، الصينية، التاميلية',
        famous: 'المارينا، التجارة، النظافة'
    },
    'Philippines': {
        capital: 'مانيلا',
        population: '110 مليون',
        area: '300 ألف كم²',
        currency: 'بيزو فلبيني',
        languages: 'الفلبينية، الإنجليزية',
        famous: 'الجزر، الأرز، الملاكمة'
    },
    'Vietnam': {
        capital: 'هانوي',
        population: '97 مليون',
        area: '331 ألف كم²',
        currency: 'دونغ فيتنامي',
        languages: 'الفيتنامية',
        famous: 'الفو، خليج هالونغ، الحرب'
    },
    'Bangladesh': {
        capital: 'دكا',
        population: '165 مليون',
        area: '147 ألف كم²',
        currency: 'تاكا بنغلاديشية',
        languages: 'البنغالية',
        famous: 'النسيج، الأرز، الفيضانات'
    },
    'Pakistan': {
        capital: 'إسلام آباد',
        population: '225 مليون',
        area: '881 ألف كم²',
        currency: 'روبية باكستانية',
        languages: 'الأردية، الإنجليزية',
        famous: 'الكريكت، الجبال، الشاي'
    },
    'Iran': {
        capital: 'طهران',
        population: '84 مليون',
        area: '1.6 مليون كم²',
        currency: 'ريال إيراني',
        languages: 'الفارسية',
        famous: 'السجاد، النفط، الشعر'
    },
    'Iraq': {
        capital: 'بغداد',
        population: '41 مليون',
        area: '438 ألف كم²',
        currency: 'دينار عراقي',
        languages: 'العربية، الكردية',
        famous: 'بابل، النفط، التاريخ القديم'
    },
    'Israel': {
        capital: 'القدس',
        population: '9.4 مليون',
        area: '20 ألف كم²',
        currency: 'شيكل إسرائيلي',
        languages: 'العبرية، العربية',
        famous: 'التكنولوجيا، الأماكن المقدسة، الصحراء'
    },
    'Jordan': {
        capital: 'عمان',
        population: '10.2 مليون',
        area: '89 ألف كم²',
        currency: 'دينار أردني',
        languages: 'العربية',
        famous: 'البتراء، البحر الميت، الضيافة'
    },
    'Lebanon': {
        capital: 'بيروت',
        population: '6.8 مليون',
        area: '10 ألف كم²',
        currency: 'ليرة لبنانية',
        languages: 'العربية، الفرنسية',
        famous: 'الأرز، التجارة، الطعام'
    },
    'Syria': {
        capital: 'دمشق',
        population: '18 مليون',
        area: '185 ألف كم²',
        currency: 'ليرة سورية',
        languages: 'العربية',
        famous: 'التاريخ القديم، الحرف، الياسمين'
    },
    'Kuwait': {
        capital: 'الكويت',
        population: '4.3 مليون',
        area: '17 ألف كم²',
        currency: 'دينار كويتي',
        languages: 'العربية',
        famous: 'النفط، التجارة، الأبراج'
    },
    'Qatar': {
        capital: 'الدوحة',
        population: '2.9 مليون',
        area: '11 ألف كم²',
        currency: 'ريال قطري',
        languages: 'العربية',
        famous: 'الغاز الطبيعي، كأس العالم، الثراء'
    },
    'United Arab Emirates': {
        capital: 'أبوظبي',
        population: '9.9 مليون',
        area: '83 ألف كم²',
        currency: 'درهم إماراتي',
        languages: 'العربية',
        famous: 'برج خليفة، التجارة، الفخامة'
    },
    'Oman': {
        capital: 'مسقط',
        population: '5.1 مليون',
        area: '309 ألف كم²',
        currency: 'ريال عماني',
        languages: 'العربية',
        famous: 'البخور، الجبال، التاريخ البحري'
    },
    'Bahrain': {
        capital: 'المنامة',
        population: '1.7 مليون',
        area: '765 كم²',
        currency: 'دينار بحريني',
        languages: 'العربية',
        famous: 'اللؤلؤ، البنوك، الفورمولا 1'
    },
    'Yemen': {
        capital: 'صنعاء',
        population: '30 مليون',
        area: '527 ألف كم²',
        currency: 'ريال يمني',
        languages: 'العربية',
        famous: 'القهوة، العسل، التاريخ القديم'
    },
    'Libya': {
        capital: 'طرابلس',
        population: '6.9 مليون',
        area: '1.7 مليون كم²',
        currency: 'دينار ليبي',
        languages: 'العربية',
        famous: 'النفط، الصحراء، الآثار الرومانية'
    },
    'Tunisia': {
        capital: 'تونس',
        population: '11.8 مليون',
        area: '163 ألف كم²',
        currency: 'دينار تونسي',
        languages: 'العربية',
        famous: 'قرطاج، الياسمين، الثورة'
    },
    'Algeria': {
        capital: 'الجزائر',
        population: '44 مليون',
        area: '2.3 مليون كم²',
        currency: 'دينار جزائري',
        languages: 'العربية، الأمازيغية',
        famous: 'الغاز الطبيعي، الصحراء، الثورة'
    },
    'Sudan': {
        capital: 'الخرطوم',
        population: '44 مليون',
        area: '1.8 مليون كم²',
        currency: 'جنيه سوداني',
        languages: 'العربية',
        famous: 'النيل، الذهب، الأهرامات النوبية'
    },
    'Ethiopia': {
        capital: 'أديس أبابا',
        population: '117 مليون',
        area: '1.1 مليون كم²',
        currency: 'بير إثيوبي',
        languages: 'الأمهرية',
        famous: 'القهوة، الجري، التاريخ القديم'
    },
    'Ghana': {
        capital: 'أكرا',
        population: '32 مليون',
        area: '238 ألف كم²',
        currency: 'سيدي غاني',
        languages: 'الإنجليزية',
        famous: 'الذهب، الكاكاو، الموسيقى'
    },
    'Portugal': {
        capital: 'لشبونة',
        population: '10.3 مليون',
        area: '92 ألف كم²',
        currency: 'يورو',
        languages: 'البرتغالية',
        famous: 'المستكشفون، الفادو، بورتو'
    },
    'Ireland': {
        capital: 'دبلن',
        population: '5 مليون',
        area: '70 ألف كم²',
        currency: 'يورو',
        languages: 'الإنجليزية، الأيرلندية',
        famous: 'عيد القديس باتريك، البيرة، الموسيقى التقليدية'
    },
    'Austria': {
        capital: 'فيينا',
        population: '9 مليون',
        area: '83 ألف كم²',
        currency: 'يورو',
        languages: 'الألمانية',
        famous: 'الموسيقى الكلاسيكية، جبال الألب، القهوة'
    },
    'Belgium': {
        capital: 'بروكسل',
        population: '11.5 مليون',
        area: '30 ألف كم²',
        currency: 'يورو',
        languages: 'الهولندية، الفرنسية، الألمانية',
        famous: 'الشوكولاتة، الوفل، البيرة'
    },
    'Czech Republic': {
        capital: 'براغ',
        population: '10.7 مليون',
        area: '78 ألف كم²',
        currency: 'كرونة تشيكية',
        languages: 'التشيكية',
        famous: 'القلعة، الجسور، البيرة'
    },
    'Poland': {
        capital: 'وارسو',
        population: '37.8 مليون',
        area: '312 ألف كم²',
        currency: 'زلوتي بولندي',
        languages: 'البولندية',
        famous: 'التاريخ، المطبخ، القلاع'
    },
    'Hungary': {
        capital: 'بودابست',
        population: '9.7 مليون',
        area: '93 ألف كم²',
        currency: 'فورنت هنغاري',
        languages: 'المجرية',
        famous: 'الحمامات الحرارية، البرلمان، نهر الدانوب'
    },
    'Romania': {
        capital: 'بوخارست',
        population: '19 مليون',
        area: '238 ألف كم²',
        currency: 'ليو روماني',
        languages: 'الرومانية',
        famous: 'قلعة دراكولا، الكاربات، الفولكلور'
    },
    'Ukraine': {
        capital: 'كييف',
        population: '41 مليون',
        area: '603 ألف كم²',
        currency: 'هريفنا أوكرانية',
        languages: 'الأوكرانية',
        famous: 'التاريخ، الثقافة، الكنائس'
    },
    'Kazakhstan': {
        capital: 'نور سلطان',
        population: '19 مليون',
        area: '2.7 مليون كم²',
        currency: 'تينغ كازاخستاني',
        languages: 'الكازاخية، الروسية',
        famous: 'السهوب، النفط، بايكونور'
    },
    'Uzbekistan': {
        capital: 'طشقند',
        population: '34 مليون',
        area: '447 ألف كم²',
        currency: 'سوم أوزبكي',
        languages: 'الأوزبكية',
        famous: 'طريق الحرير، المساجد، السمرقند'
    },
    'Afghanistan': {
        capital: 'كابول',
        population: '39 مليون',
        area: '652 ألف كم²',
        currency: 'أفغاني أفغاني',
        languages: 'الدرية، البشتوية',
        famous: 'التاريخ، الجبال، السجاد'
    },
    'Iraq': {
        capital: 'بغداد',
        population: '41 مليون',
        area: '438 ألف كم²',
        currency: 'دينار عراقي',
        languages: 'العربية، الكردية',
        famous: 'بابل، النفط، التاريخ القديم'
    },
    'Syria': {
        capital: 'دمشق',
        population: '18 مليون',
        area: '185 ألف كم²',
        currency: 'ليرة سورية',
        languages: 'العربية',
        famous: 'التاريخ القديم، الحرف، الياسمين'
    },
    'Lebanon': {
        capital: 'بيروت',
        population: '6.8 مليون',
        area: '10 ألف كم²',
        currency: 'ليرة لبنانية',
        languages: 'العربية، الفرنسية',
        famous: 'الأرز، التجارة، الطعام'
    },
    'Jordan': {
        capital: 'عمان',
        population: '10.2 مليون',
        area: '89 ألف كم²',
        currency: 'دينار أردني',
        languages: 'العربية',
        famous: 'البتراء، البحر الميت، الضيافة'
    },
    'Palestine': {
        capital: 'القدس الشرقية (مطالب بها)',
        population: '5 مليون',
        area: '6 ألف كم²',
        currency: 'دينار أردني، شيكل إسرائيلي',
        languages: 'العربية',
        famous: 'الأماكن المقدسة، التاريخ، الزيتون'
    },
    'Yemen': {
        capital: 'صنعاء',
        population: '30 مليون',
        area: '527 ألف كم²',
        currency: 'ريال يمني',
        languages: 'العربية',
        famous: 'القهوة، العسل، التاريخ القديم'
    },
    'Oman': {
        capital: 'مسقط',
        population: '5.1 مليون',
        area: '309 ألف كم²',
        currency: 'ريال عماني',
        languages: 'العربية',
        famous: 'البخور، الجبال، التاريخ البحري'
    },
    'United Arab Emirates': {
        capital: 'أبوظبي',
        population: '9.9 مليون',
        area: '83 ألف كم²',
        currency: 'درهم إماراتي',
        languages: 'العربية',
        famous: 'برج خليفة، التجارة، الفخامة'
    },
    'Qatar': {
        capital: 'الدوحة',
        population: '2.9 مليون',
        area: '11 ألف كم²',
        currency: 'ريال قطري',
        languages: 'العربية',
        famous: 'الغاز الطبيعي، كأس العالم، الثراء'
    },
    'Kuwait': {
        capital: 'الكويت',
        population: '4.3 مليون',
        area: '17 ألف كم²',
        currency: 'دينار كويتي',
        languages: 'العربية',
        famous: 'النفط، التجارة، الأبراج'
    },
    'Bahrain': {
        capital: 'المنامة',
        population: '1.7 مليون',
        area: '765 كم²',
        currency: 'دينار بحريني',
        languages: 'العربية',
        famous: 'اللؤلؤ، البنوك، الفورمولا 1'
    },
    'Eritrea': {
        capital: 'أسمرة',
        population: '3.5 مليون',
        area: '117 ألف كم²',
        currency: 'ناكفا إريترية',
        languages: 'التغرينية، العربية، الإنجليزية',
        famous: 'التاريخ، البحر الأحمر، القهوة'
    },
    'Djibouti': {
        capital: 'جيبوتي',
        population: '1 مليون',
        area: '23 ألف كم²',
        currency: 'فرنك جيبوتي',
        languages: 'العربية، الفرنسية',
        famous: 'البحر الأحمر، البحيرات المالحة، البراكين'
    },
    'Somalia': {
        capital: 'مقديشو',
        population: '16 مليون',
        area: '637 ألف كم²',
        currency: 'شلن صومالي',
        languages: 'الصومالية، العربية',
        famous: 'الشواطئ، التاريخ، الماشية'
    },
    'Uganda': {
        capital: 'كمبالا',
        population: '47 مليون',
        area: '241 ألف كم²',
        currency: 'شلن أوغندي',
        languages: 'الإنجليزية، اللوغندية',
        famous: 'الغوريلا، بحيرة فيكتوريا، القهوة'
    },
    'Rwanda': {
        capital: 'كيغالي',
        population: '13 مليون',
        area: '26 ألف كم²',
        currency: 'فرنك رواندي',
        languages: 'الكينيارواندية، الإنجليزية، الفرنسية',
        famous: 'الغوريلا، التلال، القهوة'
    },
    'Burundi': {
        capital: 'غيتيغا',
        population: '12 مليون',
        area: '27 ألف كم²',
        currency: 'فرنك بوروندي',
        languages: 'الكيروندي، الفرنسية',
        famous: 'البحيرات، القهوة، الموسيقى'
    },
    'DR Congo': {
        capital: 'كينشاسا',
        population: '92 مليون',
        area: '2.3 مليون كم²',
        currency: 'فرنك كونغولي',
        languages: 'الفرنسية',
        famous: 'الغوريلا، الأنهار، المعادن'
    },
    'Congo': {
        capital: 'برازافيل',
        population: '5.6 مليون',
        area: '342 ألف كم²',
        currency: 'فرنك وسط أفريقي',
        languages: 'الفرنسية',
        famous: 'الغابات، الأنهار، النفط'
    },
    'Gabon': {
        capital: 'ليبرفيل',
        population: '2.2 مليون',
        area: '267 ألف كم²',
        currency: 'فرنك وسط أفريقي',
        languages: 'الفرنسية',
        famous: 'الغابات، الحياة البرية، النفط'
    },
    'Cameroon': {
        capital: 'ياوندي',
        population: '27 مليون',
        area: '475 ألف كم²',
        currency: 'فرنك وسط أفريقي',
        languages: 'الفرنسية، الإنجليزية',
        famous: 'التنوع، كرة القدم، القهوة'
    },
    'Chad': {
        capital: 'نجامينا',
        population: '16 مليون',
        area: '1.2 مليون كم²',
        currency: 'فرنك وسط أفريقي',
        languages: 'العربية، الفرنسية',
        famous: 'الصحراء، بحيرة تشاد، التاريخ'
    },
    'Niger': {
        capital: 'نيامي',
        population: '25 مليون',
        area: '1.2 مليون كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'الفرنسية',
        famous: 'الصحراء، التاريخ، اليورانيوم'
    },
    'Mali': {
        capital: 'باماكو',
        population: '20 مليون',
        area: '1.2 مليون كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'الفرنسية',
        famous: 'تمبكتو، الموسيقى، الصحراء'
    },
    'Mauritania': {
        capital: 'نواكشوط',
        population: '4.6 مليون',
        area: '1 مليون كم²',
        currency: 'أوقية موريتانية',
        languages: 'العربية، الفرنسية',
        famous: 'الصحراء، المحيط، التاريخ'
    },
    'Senegal': {
        capital: 'داكار',
        population: '17 مليون',
        area: '196 ألف كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'الفرنسية',
        famous: 'الجزيرة، الموسيقى، الفن'
    },
    'Gambia': {
        capital: 'بانجول',
        population: '2.5 مليون',
        area: '10 ألف كم²',
        currency: 'دالاسي غامبي',
        languages: 'الإنجليزية',
        famous: 'الشواطئ، الأنهار، الطيور'
    },
    'Guinea-Bissau': {
        capital: 'بيساو',
        population: '2 مليون',
        area: '36 ألف كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'البرتغالية',
        famous: 'الجزر، التاريخ، الكاجو'
    },
    'Guinea': {
        capital: 'كوناكري',
        population: '13 مليون',
        area: '245 ألف كم²',
        currency: 'فرنك غيني',
        languages: 'الفرنسية',
        famous: 'المعادن، الأنهار، الموسيقى'
    },
    'Sierra Leone': {
        capital: 'فريتاون',
        population: '8 مليون',
        area: '71 ألف كم²',
        currency: 'ليون سيراليوني',
        languages: 'الإنجليزية',
        famous: 'الماس، الشواطئ، التاريخ'
    },
    'Liberia': {
        capital: 'مونروفيا',
        population: '5 مليون',
        area: '111 ألف كم²',
        currency: 'دولار ليبيري',
        languages: 'الإنجليزية',
        famous: 'التاريخ، المطاط، الشواطئ'
    },
    'Ivory Coast': {
        capital: 'ياموسوكرو',
        population: '27 مليون',
        area: '322 ألف كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'الفرنسية',
        famous: 'الكاكاو، البن، الفن'
    },
    'Burkina Faso': {
        capital: 'واغادوغو',
        population: '21 مليون',
        area: '274 ألف كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'الفرنسية',
        famous: 'الذهب، القطن، الفن'
    },
    'Togo': {
        capital: 'لومي',
        population: '8.6 مليون',
        area: '56 ألف كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'الفرنسية',
        famous: 'الشواطئ، التاريخ، البن'
    },
    'Benin': {
        capital: 'بورتو نوفو',
        population: '12 مليون',
        area: '114 ألف كم²',
        currency: 'فرنك غرب أفريقي',
        languages: 'الفرنسية',
        famous: 'الفودو، التاريخ، القطن'
    },
    'Ghana': {
        capital: 'أكرا',
        population: '32 مليون',
        area: '238 ألف كم²',
        currency: 'سيدي غاني',
        languages: 'الإنجليزية',
        famous: 'الذهب، الكاكاو، الموسيقى'
    },
    'Nigeria': {
        capital: 'أبوجا',
        population: '218 مليون',
        area: '923 ألف كم²',
        currency: 'نايرا نيجيرية',
        languages: 'الإنجليزية',
        famous: 'نوليوود، النفط، التنوع الثقافي'
    },
    'Cameroon': {
        capital: 'ياوندي',
        population: '27 مليون',
        area: '475 ألف كم²',
        currency: 'فرنك وسط أفريقي',
        languages: 'الفرنسية، الإنجليزية',
        famous: 'التنوع، كرة القدم، القهوة'
    },
    'Central African Republic': {
        capital: 'بانغي',
        population: '5.4 مليون',
        area: '622 ألف كم²',
        currency: 'فرنك وسط أفريقي',
        languages: 'الفرنسية، السانغو',
        famous: 'الماس، الغابات، الحياة البرية'
    },
    'Equatorial Guinea': {
        capital: 'مالابو',
        population: '1.4 مليون',
        area: '28 ألف كم²',
        currency: 'فرنك وسط أفريقي',
        languages: 'الإسبانية، الفرنسية، البرتغالية',
        famous: 'النفط، الغابات، الشواطئ'
    },
    'Sao Tome and Principe': {
        capital: 'ساو تومي',
        population: '220 ألف',
        area: '964 كم²',
        currency: 'دوبرا ساو تومي وبرينسيبي',
        languages: 'البرتغالية',
        famous: 'الشواطئ، الكاكاو، القهوة'
    },
    'Angola': {
        capital: 'لواندا',
        population: '34 مليون',
        area: '1.2 مليون كم²',
        currency: 'كوانزا أنغولي',
        languages: 'البرتغالية',
        famous: 'النفط، الماس، التاريخ'
    },
    'Namibia': {
        capital: 'ويندهوك',
        population: '2.5 مليون',
        area: '825 ألف كم²',
        currency: 'دولار ناميبي',
        languages: 'الإنجليزية',
        famous: 'الصحراء، الحياة البرية، الماس'
    },
    'Botswana': {
        capital: 'غابورون',
        population: '2.3 مليون',
        area: '581 ألف كم²',
        currency: 'بولا بوتسواني',
        languages: 'الإنجليزية، التسوانا',
        famous: 'السفاري، الماس، دلتا أوكافانغو'
    },
    'Zimbabwe': {
        capital: 'هراري',
        population: '15 مليون',
        area: '390 ألف كم²',
        currency: 'دولار أمريكي (متعدد العملات)',
        languages: 'الإنجليزية، الشونا، النديبيلي',
        famous: 'شلالات فيكتوريا، الحياة البرية، التاريخ'
    },
    'Zambia': {
        capital: 'لوساكا',
        population: '18 مليون',
        area: '752 ألف كم²',
        currency: 'كواشا زامبي',
        languages: 'الإنجليزية',
        famous: 'شلالات فيكتوريا، السفاري، النحاس'
    },
    'Malawi': {
        capital: 'ليلونغوي',
        population: '19 مليون',
        area: '118 ألف كم²',
        currency: 'كواشا مالاوي',
        languages: 'الإنجليزية، الشيشيوا',
        famous: 'بحيرة مالاوي، الشاي، التبغ'
    },
    'Mozambique': {
        capital: 'مابوتو',
        population: '32 مليون',
        area: '799 ألف كم²',
        currency: 'متكال موزمبيقي',
        languages: 'البرتغالية',
        famous: 'الشواطئ، التاريخ، المأكولات البحرية'
    },
    'Madagascar': {
        capital: 'أنتاناناريفو',
        population: '28 مليون',
        area: '587 ألف كم²',
        currency: 'أرياري مدغشقري',
        languages: 'المالاغاشية، الفرنسية',
        famous: 'الليمور، الطبيعة، الفانيليا'
    },
    'Tanzania': {
        capital: 'دودوما',
        population: '61 مليون',
        area: '945 ألف كم²',
        currency: 'شلن تنزاني',
        languages: 'السواحيلية، الإنجليزية',
        famous: 'سيرينغيتي، كليمنجارو، زنجبار'
    },
    'Uganda': {
        capital: 'كمبالا',
        population: '47 مليون',
        area: '241 ألف كم²',
        currency: 'شلن أوغندي',
        languages: 'الإنجليزية، اللوغندية',
        famous: 'الغوريلا، بحيرة فيكتوريا، القهوة'
    },
    'Ethiopia': {
        capital: 'أديس أبابا',
        population: '117 مليون',
        area: '1.1 مليون كم²',
        currency: 'بير إثيوبي',
        languages: 'الأمهرية',
        famous: 'القهوة، الجري، التاريخ القديم'
    },
    'Eritrea': {
        capital: 'أسمرة',
        population: '3.5 مليون',
        area: '117 ألف كم²',
        currency: 'ناكفا إريترية',
        languages: 'التغرينية، العربية، الإنجليزية',
        famous: 'التاريخ، البحر الأحمر، القهوة'
    },
    'Djibouti': {
        capital: 'جيبوتي',
        population: '1 مليون',
        area: '23 ألف كم²',
        currency: 'فرنك جيبوتي',
        languages: 'العربية، الفرنسية',
        famous: 'البحر الأحمر، البحيرات المالحة، البراكين'
    },
    'Somalia': {
        capital: 'مقديشو',
        population: '16 مليون',
        area: '637 ألف كم²',
        currency: 'شلن صومالي',
        languages: 'الصومالية، العربية',
        famous: 'الشواطئ، التاريخ، الماشية'
    },
    'Comoros': {
        capital: 'موروني',
        population: '870 ألف',
        area: '1.8 ألف كم²',
        currency: 'فرنك قمري',
        languages: 'القمرية، الفرنسية، العربية',
        famous: 'الجزر، التوابل، الطبيعة'
    },
    'Seychelles': {
        capital: 'فيكتوريا',
        population: '98 ألف',
        area: '455 كم²',
        currency: 'روبية سيشيلية',
        languages: 'الكريولية السيشيلية، الإنجليزية، الفرنسية',
        famous: 'الشواطئ، الغوص، الطبيعة'
    },
    'Mauritius': {
        capital: 'بورت لويس',
        population: '1.2 مليون',
        area: '2 ألف كم²',
        currency: 'روبية موريشيوسية',
        languages: 'الإنجليزية، الفرنسية، الكريولية الموريشيوسية',
        famous: 'الشواطئ، الشعاب المرجانية، السكر'
    },
    'Reunion': {
        capital: 'سان دوني',
        population: '860 ألف',
        area: '2.5 ألف كم²',
        currency: 'يورو',
        languages: 'الفرنسية، الكريولية الريونيونية',
        famous: 'البراكين، الشلالات، الطبيعة'
    },
    'Mayotte': {
        capital: 'مامودزو',
        population: '270 ألف',
        area: '374 كم²',
        currency: 'يورو',
        languages: 'الفرنسية، الشيموري',
        famous: 'الشواطئ، الشعاب المرجانية، الطبيعة'
    },
    'Maldives': {
        capital: 'ماليه',
        population: '540 ألف',
        area: '300 كم²',
        currency: 'روفيا مالديفية',
        languages: 'الديفيه',
        famous: 'الجزر، الغوص، المنتجعات'
    },
    'Sri Lanka': {
        capital: 'سري جاياواردنابورا كوتي',
        population: '21 مليون',
        area: '65 ألف كم²',
        currency: 'روبية سريلانكية',
        languages: 'السنهالية، التاميلية',
        famous: 'الشاي، الشواطئ، التاريخ'
    },
    'Nepal': {
        capital: 'كاتماندو',
        population: '29 مليون',
        area: '147 ألف كم²',
        currency: 'روبية نيبالية',
        languages: 'النيبالية',
        famous: 'جبل إيفرست، الهيمالايا، المعابد'
    },
    'Bhutan': {
        capital: 'تيمفو',
        population: '770 ألف',
        area: '38 ألف كم²',
        currency: 'نغولترم بوتاني',
        languages: 'الدزونكا',
        famous: 'الجبال، الأديرة، السعادة القومية الإجمالية'
    },
    'Myanmar': {
        capital: 'نايبيداو',
        population: '54 مليون',
        area: '676 ألف كم²',
        currency: 'كيات ميانماري',
        languages: 'البورمية',
        famous: 'المعابد، التاريخ، الأحجار الكريمة'
    },
    'Laos': {
        capital: 'فيينتيان',
        population: '7.2 مليون',
        area: '236 ألف كم²',
        currency: 'كيب لاوسي',
        languages: 'اللاوية',
        famous: 'المعابد، الأنهار، الطبيعة'
    },
    'Cambodia': {
        capital: 'بنوم بنه',
        population: '16 مليون',
        area: '181 ألف كم²',
        currency: 'رييل كمبودي',
        languages: 'الخميرية',
        famous: 'أنغكور وات، التاريخ، الشواطئ'
    },
    'East Timor': {
        capital: 'ديلي',
        population: '1.3 مليون',
        area: '15 ألف كم²',
        currency: 'دولار أمريكي',
        languages: 'التيتومية، البرتغالية',
        famous: 'الشواطئ، التاريخ، القهوة'
    },
    'Papua New Guinea': {
        capital: 'بورت مورسبي',
        population: '9 مليون',
        area: '462 ألف كم²',
        currency: 'كينا بابوا غينيا الجديدة',
        languages: 'التوك بيسين، الإنجليزية، الهيري موتو',
        famous: 'التنوع الثقافي، الغابات، الطيور'
    },
    'Solomon Islands': {
        capital: 'هونيارا',
        population: '680 ألف',
        area: '28 ألف كم²',
        currency: 'دولار جزر سليمان',
        languages: 'الإنجليزية',
        famous: 'الغوص، التاريخ، الجزر'
    },
    'Vanuatu': {
        capital: 'بورت فيلا',
        population: '300 ألف',
        area: '12 ألف كم²',
        currency: 'فاتو فانواتي',
        languages: 'البيسلاما، الإنجليزية، الفرنسية',
        famous: 'الغوص، البراكين، الثقافة'
    },
    'Fiji': {
        capital: 'سوفا',
        population: '900 ألف',
        area: '18 ألف كم²',
        currency: 'دولار فيجي',
        languages: 'الإنجليزية، الفيجي، الهندية',
        famous: 'الشواطئ، الغوص، الثقافة'
    },
    'New Caledonia': {
        capital: 'نوميا',
        population: '280 ألف',
        area: '18 ألف كم²',
        currency: 'فرنك المحيط الهادئ',
        languages: 'الفرنسية',
        famous: 'الشعاب المرجانية، الطبيعة، الثقافة'
    },
    'Samoa': {
        capital: 'أبيا',
        population: '200 ألف',
        area: '2.8 ألف كم²',
        currency: 'تالا ساموي',
        languages: 'الساموية، الإنجليزية',
        famous: 'الشواطئ، الشلالات، الثقافة'
    },
    'Tonga': {
        capital: 'نوكو ألوفا',
        population: '100 ألف',
        area: '747 كم²',
        currency: 'بانغا تونغي',
        languages: 'التونغية، الإنجليزية',
        famous: 'الشواطئ، الحيتان، التاريخ'
    },
    'Tuvalu': {
        capital: 'فونافوتي',
        population: '11 ألف',
        area: '26 كم²',
        currency: 'دولار أسترالي، دولار توفالو',
        languages: 'التوفالوية، الإنجليزية',
        famous: 'الجزر المرجانية، الشواطئ، الطبيعة'
    },
    'Kiribati': {
        capital: 'تاراوا',
        population: '120 ألف',
        area: '811 كم²',
        currency: 'دولار أسترالي، دولار كيريباتي',
        languages: 'الكيريباتية، الإنجليزية',
        famous: 'الجزر المرجانية، الغوص، التاريخ'
    },
    'Marshall Islands': {
        capital: 'ماجورو',
        population: '59 ألف',
        area: '181 كم²',
        currency: 'دولار أمريكي',
        languages: 'المارشالية، الإنجليزية',
        famous: 'الجزر المرجانية، الغوص، التاريخ'
    },
    'Micronesia': {
        capital: 'باليكير',
        population: '115 ألف',
        area: '702 كم²',
        currency: 'دولار أمريكي',
        languages: 'الإنجليزية، اليابيزية، الكوسرايية، البوهنبية، التروكية',
        famous: 'الجزر، الغوص، التاريخ'
    },
    'Palau': {
        capital: 'نغيرولمود',
        population: '18 ألف',
        area: '459 كم²',
        currency: 'دولار أمريكي',
        languages: 'البالاوية، الإنجليزية',
        famous: 'الغوص، الجزر الصخرية، التاريخ'
    },
    'Nauru': {
        capital: 'يارين',
        population: '10 آلاف',
        area: '21 كم²',
        currency: 'دولار أسترالي',
        languages: 'الناوروية، الإنجليزية',
        famous: 'الفوسفات، الجزر، التاريخ'
    },
    'Philippines': {
        capital: 'مانيلا',
        population: '110 مليون',
        area: '300 ألف كم²',
        currency: 'بيزو فلبيني',
        languages: 'الفلبينية، الإنجليزية',
        famous: 'الجزر، الأرز، الملاكمة'
    },
    'Indonesia': {
        capital: 'جاكرتا',
        population: '273 مليون',
        area: '1.9 مليون كم²',
        currency: 'روبية إندونيسية',
        languages: 'الإندونيسية',
        famous: 'بالي، البراكين، التوابل'
    },
    'Malaysia': {
        capital: 'كوالالمبور',
        population: '33 مليون',
        area: '329 ألف كم²',
        currency: 'رينغيت ماليزي',
        languages: 'الماليزية',
        famous: 'البتروناس، الطعام، التنوع'
    },
    'Singapore': {
        capital: 'سنغافورة',
        population: '5.9 مليون',
        area: '719 كم²',
        currency: 'دولار سنغافوري',
        languages: 'الإنجليزية، الماليزية، الصينية، التاميلية',
        famous: 'المارينا، التجارة، النظافة'
    },
    'Brunei': {
        capital: 'بندر سري بكاوان',
        population: '440 ألف',
        area: '5.7 ألف كم²',
        currency: 'دولار بروني',
        languages: 'الماليزية، الإنجليزية',
        famous: 'النفط، المساجد، الطبيعة'
    },
    'Thailand': {
        capital: 'بانكوك',
        population: '70 مليون',
        area: '513 ألف كم²',
        currency: 'بات تايلندي',
        languages: 'التايلندية',
        famous: 'المعابد، الطعام الحار، الفيلة'
    },
    'Vietnam': {
        capital: 'هانوي',
        population: '97 مليون',
        area: '331 ألف كم²',
        currency: 'دونغ فيتنامي',
        languages: 'الفيتنامية',
        famous: 'الفو، خليج هالونغ، الحرب'
    },
    'Myanmar': {
        capital: 'نايبيداو',
        population: '54 مليون',
        area: '676 ألف كم²',
        currency: 'كيات ميانماري',
        languages: 'البورمية',
        famous: 'المعابد، التاريخ، الأحجار الكريمة'
    },
    'Laos': {
        capital: 'فيينتيان',
        population: '7.2 مليون',
        area: '236 ألف كم²',
        currency: 'كيب لاوسي',
        languages: 'اللاوية',
        famous: 'المعابد، الأنهار، الطبيعة'
    },
    'Cambodia': {
        capital: 'بنوم بنه',
        population: '16 مليون',
        area: '181 ألف كم²',
        currency: 'رييل كمبودي',
        languages: 'الخميرية',
        famous: 'أنغكور وات، التاريخ، الشواطئ'
    },
    'Timor-Leste': {
        capital: 'ديلي',
        population: '1.3 مليون',
        area: '15 ألف كم²',
        currency: 'دولار أمريكي',
        languages: 'التيتومية، البرتغالية',
        famous: 'الشواطئ، التاريخ، القهوة'
    },
    'Australia': {
        capital: 'كانبرا',
        population: '25 مليون',
        area: '7.7 مليون كم²',
        currency: 'دولار أسترالي',
        languages: 'الإنجليزية',
        famous: 'الكنغر، الحاجز المرجاني، الصحراء'
    },
    'New Zealand': {
        capital: 'ويلينغتون',
        population: '5.1 مليون',
        area: '268 ألف كم²',
        currency: 'دولار نيوزيلندي',
        languages: 'الإنجليزية، الماورية',
        famous: 'سيد الخواتم، الخراف، الطبيعة'
    },
    'Fiji': {
        capital: 'سوفا',
        population: '900 ألف',
        area: '18 ألف كم²',
        currency: 'دولار فيجي',
        languages: 'الإنجليزية، الفيجي، الهندية',
        famous: 'الشواطئ، الغوص، الثقافة'
    },
    'Papua New Guinea': {
        capital: 'بورت مورسبي',
        population: '9 مليون',
        area: '462 ألف كم²',
        currency: 'كينا بابوا غينيا الجديدة',
        languages: 'التوك بيسين، الإنجليزية، الهيري موتو',
        famous: 'التنوع الثقافي، الغابات، الطيور'
    },
    'Solomon Islands': {
        capital: 'هونيارا',
        population: '680 ألف',
        area: '28 ألف كم²',
        currency: 'دولار جزر سليمان',
        languages: 'الإنجليزية',
        famous: 'الغوص، التاريخ، الجزر'
    },
    'Vanuatu': {
        capital: 'بورت فيلا',
        population: '300 ألف',
        area: '12 ألف كم²',
        currency: 'فاتو فانواتي',
        languages: 'البيسلاما، الإنجليزية، الفرنسية',
        famous: 'الغوص، البراكين، الثقافة'
    },
    'New Caledonia': {
        capital: 'نوميا',
        population: '280 ألف',
        area: '18 ألف كم²',
        currency: 'فرنك المحيط الهادئ',
        languages: 'الفرنسية',
        famous: 'الشعاب المرجانية، الطبيعة، الثقافة'
    },
    'Samoa': {
        capital: 'أبيا',
        population: '200 ألف',
        area: '2.8 ألف كم²',
        currency: 'تالا ساموي',
        languages: 'الساموية، الإنجليزية',
        famous: 'الشواطئ، الشلالات، الثقافة'
    },
    'Tonga': {
        capital: 'نوكو ألوفا',
        population: '100 ألف',
        area: '747 كم²',
        currency: 'بانغا تونغي',
        languages: 'التونغية، الإنجليزية',
        famous: 'الشواطئ، الحيتان، التاريخ'
    },
    'Tuvalu': {
        capital: 'فونافوتي',
        population: '11 ألف',
        area: '26 كم²',
        currency: 'دولار أسترالي، دولار توفالو',
        languages: 'التوفالوية، الإنجليزية',
        famous: 'الجزر المرجانية، الشواطئ، الطبيعة'
    },
    'Kiribati': {
        capital: 'تاراوا',
        population: '120 ألف',
        area: '811 كم²',
        currency: 'دولار أسترالي، دولار كيريباتي',
        languages: 'الكيريباتية، الإنجليزية',
        famous: 'الجزر المرجانية، الغوص، التاريخ'
    },
    'Marshall Islands': {
        capital: 'ماجورو',
        population: '59 ألف',
        area: '181 كم²',
        currency: 'دولار أمريكي',
        languages: 'المارشالية، الإنجليزية',
        famous: 'الجزر المرجانية، الغوص، التاريخ'
    },
    'Micronesia': {
        capital: 'باليكير',
        population: '115 ألف',
        area: '702 كم²',
        currency: 'دولار أمريكي',
        languages: 'الإنجليزية، اليابيزية، الكوسرايية، البوهنبية، التروكية',
        famous: 'الجزر، الغوص، التاريخ'
    },
    'Palau': {
        capital: 'نغيرولمود',
        population: '18 ألف',
        area: '459 كم²',
        currency: 'دولار أمريكي',
        languages: 'البالاوية، الإنجليزية',
        famous: 'الغوص، الجزر الصخرية، التاريخ'
    },
    'Nauru': {
        capital: 'يارين',
        population: '10 آلاف',
        area: '21 كم²',
        currency: 'دولار أسترالي',
        languages: 'الناوروية، الإنجليزية',
        famous: 'الفوسفات، الجزر، التاريخ'
    },
    'United States': {
        capital: 'واشنطن',
        population: '331 مليون',
        area: '9.8 مليون كم²',
        currency: 'دولار أمريكي',
        languages: 'الإنجليزية',
        famous: 'هوليوود، ناطحات السحاب، التكنولوجيا'
    },
    'China': {
        capital: 'بكين',
        population: '1.4 مليار',
        area: '9.6 مليون كم²',
        currency: 'يوان صيني',
        languages: 'الصينية',
        famous: 'سور الصين العظيم، التصنيع، الشاي'
    },
    'Japan': {
        capital: 'طوكيو',
        population: '125 مليون',
        area: '377 ألف كم²',
        currency: 'ين ياباني',
        languages: 'اليابانية',
        famous: 'التكنولوجيا، السوشي، الأنمي'
    }
};

// تحويل أسماء الدول إلى رموز ISO
const countryNameToCode = {
    'United States': 'US',
    'China': 'CN',
    'Japan': 'JP',
    'Germany': 'DE',
    'France': 'FR',
    'United Kingdom': 'GB',
    'Italy': 'IT',
    'Spain': 'ES',
    'Brazil': 'BR',
    'India': 'IN',
    'Russia': 'RU',
    'Canada': 'CA',
    'Australia': 'AU',
    'Mexico': 'MX',
    'Egypt': 'EG',
    'Saudi Arabia': 'SA',
    'Turkey': 'TR',
    'South Korea': 'KR',
    'Argentina': 'AR',
    'South Africa': 'ZA',
    'Thailand': 'TH',
    'Greece': 'GR',
    'Netherlands': 'NL',
    'Switzerland': 'CH',
    'Norway': 'NO',
    'Sweden': 'SE',
    'Denmark': 'DK',
    'Finland': 'FI',
    'Iceland': 'IS',
    'New Zealand': 'NZ',
    'Morocco': 'MA',
    'Kenya': 'KE',
    'Nigeria': 'NG',
    'Peru': 'PE',
    'Chile': 'CL',
    'Colombia': 'CO',
    'Venezuela': 'VE',
    'Indonesia': 'ID',
    'Malaysia': 'MY',
    'Singapore': 'SG',
    'Philippines': 'PH',
    'Vietnam': 'VN',
    'Bangladesh': 'BD',
    'Pakistan': 'PK',
    'Iran': 'IR',
    'Iraq': 'IQ',
    'Israel': 'IL',
    'Jordan': 'JO',
    'Lebanon': 'LB',
    'Syria': 'SY',
    'Kuwait': 'KW',
    'Qatar': 'QA',
    'United Arab Emirates': 'AE',
    'Oman': 'OM',
    'Bahrain': 'BH',
    'Yemen': 'YE',
    'Libya': 'LY',
    'Tunisia': 'TN',
    'Algeria': 'DZ',
    'Sudan': 'SD',
    'Ethiopia': 'ET',
    'Ghana': 'GH'
};

// الحصول على الاسم العربي للدولة
function getArabicCountryName(englishName) {
    const arabicNames = {
        'United States': 'الولايات المتحدة',
        'China': 'الصين',
        'Japan': 'اليابان',
        'Germany': 'ألمانيا',
        'France': 'فرنسا',
        'United Kingdom': 'المملكة المتحدة',
        'Italy': 'إيطاليا',
        'Spain': 'إسبانيا',
        'Brazil': 'البرازيل',
        'India': 'الهند',
        'Russia': 'روسيا',
        'Canada': 'كندا',
        'Australia': 'أستراليا',
        'Mexico': 'المكسيك',
        'Egypt': 'مصر',
        'Saudi Arabia': 'السعودية',
        'Turkey': 'تركيا',
        'South Korea': 'كوريا الجنوبية',
        'Argentina': 'الأرجنتين',
        'South Africa': 'جنوب أفريقيا',
        'Thailand': 'تايلاند',
        'Greece': 'اليونان',
        'Netherlands': 'هولندا',
        'Switzerland': 'سويسرا',
        'Norway': 'النرويج',
        'Sweden': 'السويد',
        'Denmark': 'الدنمارك',
        'Finland': 'فنلندا',
        'Iceland': 'آيسلندا',
        'New Zealand': 'نيوزيلندا',
        'Morocco': 'المغرب',
        'Kenya': 'كينيا',
        'Nigeria': 'نيجيريا',
        'Peru': 'بيرو',
        'Chile': 'تشيلي',
        'Colombia': 'كولومبيا',
        'Venezuela': 'فنزويلا',
        'Indonesia': 'إندونيسيا',
        'Malaysia': 'ماليزيا',
        'Singapore': 'سنغافورة',
        'Philippines': 'الفلبين',
        'Vietnam': 'فيتنام',
        'Bangladesh': 'بنغلاديش',
        'Pakistan': 'باكستان',
        'Iran': 'إيران',
        'Iraq': 'العراق',
        'Israel': 'إسرائيل',
        'Jordan': 'الأردن',
        'Lebanon': 'لبنان',
        'Syria': 'سوريا',
        'Kuwait': 'الكويت',
        'Qatar': 'قطر',
        'United Arab Emirates': 'الإمارات',
        'Oman': 'عمان',
        'Bahrain': 'البحرين',
        'Yemen': 'اليمن',
        'Libya': 'ليبيا',
        'Tunisia': 'تونس',
        'Algeria': 'الجزائر',
        'Sudan': 'السودان',
        'Ethiopia': 'إثيوبيا',
        'Ghana': 'غانا'
    };
    
    return arabicNames[englishName] || englishName;
}

// صور المعالم الشهيرة للدول
const countryLandmarks = {
    'United States': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Statue_of_Liberty%2C_NY.jpg/800px-Statue_of_Liberty%2C_NY.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Grand_Canyon_view_from_Pima_Point_2010.jpg/800px-Grand_Canyon_view_from_Pima_Point_2010.jpg'
    ],
    'Saudi Arabia': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Kaaba_Masjid_Al_Haram_Makkah_Saudi_Arabia.jpg/800px-Kaaba_Masjid_Al_Haram_Makkah_Saudi_Arabia.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/AlUla_Desert.jpg/800px-AlUla_Desert.jpg'
    ],
    // ... [إضافة معالم لجميع الدول الأخرى]
};

// متغيرات عامة
let currentCountry = null;
let svgMapInstance = null;
let svgPanZoomInstance = null;

// عناصر DOM
const landingPage = document.getElementById('landing-page');
const mapPage = document.getElementById('map-page');
const getStartedBtn = document.getElementById('get-started-btn');
const backBtn = document.getElementById('back-btn');
const countrySearch = document.getElementById('country-search');
const searchResults = document.getElementById('search-results');
const countryInfo = document.getElementById('country-info');
const closeInfoBtn = document.getElementById('close-info');
const zoomInBtn = document.getElementById('zoom-in-btn');
const zoomOutBtn = document.getElementById('zoom-out-btn');
const resetMapBtn = document.getElementById('reset-map-btn');
const loadingOverlay = document.getElementById('loading-overlay');
const galleryContainer = document.getElementById('gallery-container');

// أحداث الصفحة الرئيسية
getStartedBtn.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    mapPage.classList.remove('hidden');
    showLoading();
    let mapTimeout = setTimeout(() => {
        if (!document.querySelector('#world-map svg')) {
            hideLoading();
            loadingOverlay.querySelector('.loading-text').textContent = 'حدثت مشكلة في تحميل الخريطة. يرجى إعادة المحاولة أو التأكد من اتصال الإنترنت.';
            loadingOverlay.style.display = 'flex';
            loadingOverlay.style.opacity = '1';
        }
    }, 3000);
    setTimeout(() => {
        initializeMap();
        // عند نجاح رسم الخريطة، أزل رسالة الخطأ إن وجدت
        setTimeout(() => {
            if (document.querySelector('#world-map svg')) {
                hideLoading();
                loadingOverlay.querySelector('.loading-text').textContent = 'جاري تحميل الخريطة...';
                clearTimeout(mapTimeout);
            }
        }, 800);
    }, 500);
});

backBtn.addEventListener('click', () => {
    mapPage.classList.add('hidden');
    landingPage.classList.remove('hidden');
    hideCountryInfo();
});

// البحث عن الدول
countrySearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    if (searchTerm.length > 1) {
        searchCountry(searchTerm);
    } else {
        searchResults.classList.add('hidden');
    }
});

// إغلاق معلومات الدولة
closeInfoBtn.addEventListener('click', hideCountryInfo);

// التحكم في التكبير/التصغير
zoomInBtn.addEventListener('click', () => {
    if (svgPanZoomInstance) {
        svgPanZoomInstance.zoomIn();
    }
});

zoomOutBtn.addEventListener('click', () => {
    if (svgPanZoomInstance) {
        svgPanZoomInstance.zoomOut();
    }
});

resetMapBtn.addEventListener('click', () => {
    if (svgPanZoomInstance) {
        svgPanZoomInstance.reset();
        svgPanZoomInstance.resize();
        svgPanZoomInstance.center();
    }
});

// تهيئة الخريطة باستخدام svgMap
function initializeMap() {
    const mapContainer = document.getElementById('world-map');
    
    // إعداد بيانات svgMap
    const svgMapData = {};
    
    // تحويل بيانات الدول إلى تنسيق svgMap
    Object.keys(countriesData).forEach(countryName => {
        const countryCode = countryNameToCode[countryName];
        if (countryCode) {
            svgMapData[countryCode] = {
                name: getArabicCountryName(countryName),
                ...countriesData[countryName]
            };
        }
    });
    
    // إنشاء خريطة svgMap
    svgMapInstance = new svgMap({
        targetElementID: 'world-map',
        colorMax: '#40e0d0',
        colorMin: '#2a2a3e',
        colorNoData: '#1a1a2e',
        flagType: 'image',
        hideFlag: false,
        noDataText: 'لا توجد بيانات متاحة',
        mouseWheelZoomEnabled: true,
        initialZoom: 1.2,
        minZoom: 1,
        maxZoom: 10,
        data: {
            data: {
                info: {
                    name: 'معلومات الدولة',
                    format: '{0}',
                    thousandSeparator: ','
                }
            },
            applyData: 'info',
            values: svgMapData
        },
        countryNames: (() => {
            const names = {};
            Object.keys(countriesData).forEach(countryName => {
                const countryCode = countryNameToCode[countryName];
                if (countryCode) {
                    names[countryCode] = getArabicCountryName(countryName);
                }
            });
            return names;
        })(),
        onGetTooltip: function(tooltipDiv, countryID, countryValues) {
            // البحث عن اسم الدولة بالإنجليزية
            const englishName = Object.keys(countryNameToCode).find(name => 
                countryNameToCode[name] === countryID
            );
            
            if (englishName && countriesData[englishName]) {
                const data = countriesData[englishName];
                const arabicName = getArabicCountryName(englishName);
                
                return `
                    <div style="text-align: right; direction: rtl; font-family: 'Cairo', sans-serif;">
                        <h3 style="color: #40e0d0; margin-bottom: 10px; font-size: 16px;">${arabicName}</h3>
                        <p style="margin: 5px 0;"><strong style="color: #40e0d0;">العاصمة:</strong> ${data.capital}</p>
                        <p style="margin: 5px 0;"><strong style="color: #40e0d0;">عدد السكان:</strong> ${data.population}</p>
                        <p style="margin: 5px 0;"><strong style="color: #40e0d0;">المساحة:</strong> ${data.area}</p>
                        <p style="margin: 5px 0;"><strong style="color: #40e0d0;">العملة:</strong> ${data.currency}</p>
                        <p style="margin: 5px 0;"><strong style="color: #40e0d0;">اللغات:</strong> ${data.languages}</p>
                        <p style="margin: 5px 0;"><strong style="color: #40e0d0;">تشتهر بـ:</strong> ${data.famous}</p>
                        <p style="margin-top: 10px; font-size: 12px; color: #888;">انقر للمزيد من التفاصيل</p>
                    </div>
                `;
            }
            return '';
        }
    });
    
    // تهيئة التحكم في التكبير/التصغير
    setTimeout(() => {
        const svgElement = document.querySelector('#world-map svg');
        if (svgElement) {
            svgPanZoomInstance = svgPanZoom(svgElement, {
                zoomEnabled: false,
                panEnabled: false,
                controlIconsEnabled: false,
                fit: true,
                center: true,
                minZoom: 1,
                maxZoom: 10,
                beforeZoom: function() {
                    hideCountryInfo();
                }
            });
        }
        // أضف كلاس readonly-map لتعطيل كل التفاعل والمؤشرات
        mapContainer.classList.add('readonly-map');
        // أخفِ أزرار التحكم بالخريطة
        const mapControls = document.querySelector('.map-controls');
        if (mapControls) {
            mapControls.style.display = 'none';
        }
    }, 700);
}

// تحديد دولة
function selectCountry(countryID) {
    // البحث عن اسم الدولة بالإنجليزية
    const englishName = Object.keys(countryNameToCode).find(name => 
        countryNameToCode[name] === countryID
    );
    if (englishName && countriesData[englishName]) {
        currentCountry = englishName;
        showCountryInfo(englishName);
        // تمييز الدولة على الخريطة فقط
        const countries = document.querySelectorAll('#world-map svg path');
        countries.forEach(country => {
            country.classList.remove('selected');
        });
        const selectedCountry = document.querySelector(`#world-map svg path[data-id="${countryID}"], #world-map svg path[id="${countryID}"]`);
        if (selectedCountry) {
            selectedCountry.classList.add('selected');
            // لا تقم بأي حركة أو zoom
        }
    }
}

// عرض معلومات الدولة
function showCountryInfo(countryName) {
    const data = countriesData[countryName];
    if (!data) return;
    
    // تحديث المعلومات
    document.getElementById('country-name').textContent = getArabicCountryName(countryName);
    document.getElementById('country-capital').textContent = data.capital;
    document.getElementById('country-population').textContent = data.population;
    document.getElementById('country-area').textContent = data.area;
    document.getElementById('country-currency').textContent = data.currency;
    document.getElementById('country-languages').textContent = data.languages;
    document.getElementById('country-famous').textContent = data.famous;
    
    // تحديث العلم
    const flagImg = document.getElementById('country-flag');
    const countryCode = countryNameToCode[countryName];
    if (countryCode) {
        flagImg.src = `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
        flagImg.alt = `علم ${getArabicCountryName(countryName)}`;
    }
    
    // عرض معالم الدولة إن وجدت
    const gallery = document.getElementById('country-gallery');
    if (countryLandmarks[countryName] && countryLandmarks[countryName].length > 0) {
        gallery.classList.remove('hidden');
        galleryContainer.innerHTML = '';
        
        countryLandmarks[countryName].forEach(landmark => {
            const img = document.createElement('div');
            img.className = 'gallery-item';
            img.style.backgroundImage = `url(${landmark})`;
            galleryContainer.appendChild(img);
        });
    } else {
        gallery.classList.add('hidden');
    }
    
    // عرض النافذة
    countryInfo.classList.remove('hidden');
    countryInfo.style.animation = 'slideIn 0.3s ease-out';
}

// إخفاء معلومات الدولة
function hideCountryInfo() {
    countryInfo.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
        countryInfo.classList.add('hidden');
        
        // إزالة التمييز من الخريطة
        const countries = document.querySelectorAll('#world-map svg path');
        countries.forEach(country => {
            country.classList.remove('selected');
        });
        
        currentCountry = null;
    }, 250);
}

// البحث عن دولة
function searchCountry(searchTerm) {
    const arabicNames = {
        // ... [جميع الأسماء العربية كما هي موجودة في ملفك الأصلي]
    };
    
    const results = [];
    
    // البحث في الأسماء العربية
    for (const [arabic, english] of Object.entries(arabicNames)) {
        if (arabic.includes(searchTerm)) {
            const countryCode = countryNameToCode[english];
            if (countryCode) {
                results.push({
                    name: arabic,
                    englishName: english,
                    code: countryCode
                });
            }
        }
    }
    
    // البحث في الأسماء الإنجليزية
    for (const countryName of Object.keys(countriesData)) {
        if (countryName.toLowerCase().includes(searchTerm)) {
            const arabicName = getArabicCountryName(countryName);
            // تجنب التكرار
            if (!results.some(r => r.englishName === countryName)) {
                const countryCode = countryNameToCode[countryName];
                if (countryCode) {
                    results.push({
                        name: arabicName,
                        englishName: countryName,
                        code: countryCode
                    });
                }
            }
        }
    }
    
    // عرض النتائج
    if (results.length > 0) {
        searchResults.innerHTML = '';
        results.slice(0, 5).forEach(result => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.textContent = result.name;
            item.addEventListener('click', () => {
                selectCountry(result.code);
                countrySearch.value = '';
                searchResults.classList.add('hidden');
            });
            searchResults.appendChild(item);
        });
        searchResults.classList.remove('hidden');
    } else {
        searchResults.classList.add('hidden');
    }
}

// عرض شاشة التحميل
function showLoading() {
    loadingOverlay.style.display = 'flex';
    setTimeout(() => {
        loadingOverlay.style.opacity = '1';
    }, 10);
}

// إخفاء شاشة التحميل
function hideLoading() {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 300);
}

// إضافة تأثير اهتزاز عند النقر على الأزرار
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
});

// إضافة تأثير التوهج عند تحميل الصفحة
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// إضافة خدمة العامل لتمكين وضع PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// البحث عن دولة
function searchCountry(searchTerm) {
    const arabicNames = {
        'الولايات المتحدة': 'United States',
        'أمريكا': 'United States',
        'الصين': 'China',
        'اليابان': 'Japan',
        'ألمانيا': 'Germany',
        'فرنسا': 'France',
        'بريطانيا': 'United Kingdom',
        'إنجلترا': 'United Kingdom',
        'إيطاليا': 'Italy',
        'إسبانيا': 'Spain',
        'البرازيل': 'Brazil',
        'الهند': 'India',
        'روسيا': 'Russia',
        'كندا': 'Canada',
        'أستراليا': 'Australia',
        'المكسيك': 'Mexico',
        'مصر': 'Egypt',
        'السعودية': 'Saudi Arabia',
        'تركيا': 'Turkey',
        'إيران': 'Iran',
        'جنوب أفريقيا': 'South Africa',
        'نيجيريا': 'Nigeria',
        'كينيا': 'Kenya',
        'المغرب': 'Morocco',
        'الجزائر': 'Algeria',
        'ليبيا': 'Libya',
        'تونس': 'Tunisia',
        'السودان': 'Sudan',
        'كوريا الجنوبية': 'South Korea',
        'تايلاند': 'Thailand',
        'فيتنام': 'Vietnam',
        'إندونيسيا': 'Indonesia',
        'ماليزيا': 'Malaysia',
        'سنغافورة': 'Singapore',
        'الفلبين': 'Philippines',
        'بنغلاديش': 'Bangladesh',
        'باكستان': 'Pakistan',
        'العراق': 'Iraq',
        'سوريا': 'Syria',
        'الأردن': 'Jordan',
        'لبنان': 'Lebanon',
        'إسرائيل': 'Israel',
        'الكويت': 'Kuwait',
        'قطر': 'Qatar',
        'الإمارات': 'United Arab Emirates',
        'عمان': 'Oman',
        'اليمن': 'Yemen',
        'البحرين': 'Bahrain',
        'النرويج': 'Norway',
        'السويد': 'Sweden',
        'فنلندا': 'Finland',
        'الدنمارك': 'Denmark',
        'هولندا': 'Netherlands',
        'سويسرا': 'Switzerland',
        'اليونان': 'Greece',
        'آيسلندا': 'Iceland',
        'نيوزيلندا': 'New Zealand',
        'الأرجنتين': 'Argentina',
        'بيرو': 'Peru',
        'تشيلي': 'Chile',
        'كولومبيا': 'Colombia',
        'فنزويلا': 'Venezuela',
        'إثيوبيا': 'Ethiopia',
        'غانا': 'Ghana'
    };
    
    // البحث في الأسماء العربية
    for (const [arabic, english] of Object.entries(arabicNames)) {
        if (arabic.includes(searchTerm)) {
            const countryCode = countryNameToCode[english];
            if (countryCode) {
                selectCountry(countryCode);
                return;
            }
        }
    }
    
    // البحث في الأسماء الإنجليزية
    for (const countryName of Object.keys(countriesData)) {
        if (countryName.toLowerCase().includes(searchTerm)) {
            const countryCode = countryNameToCode[countryName];
            if (countryCode) {
                selectCountry(countryCode);
                return;
            }
        }
    }
}

// Add touch event support for buttons and overlays
function addTouchSupport() {
    const buttons = document.querySelectorAll('button, .get-started-btn, .map-control-btn, .back-btn, .close-info');
    buttons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            btn.classList.add('clicked');
        });
        btn.addEventListener('touchend', function() {
            btn.classList.remove('clicked');
        });
    });
    // Make overlays and popups easy to close on mobile
    const closeInfoBtn = document.getElementById('close-info');
    if (closeInfoBtn) {
        closeInfoBtn.addEventListener('touchstart', hideCountryInfo);
    }
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        });
    }
}

// Prevent double-tap zoom on map and controls
function preventDoubleTapZoom() {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 350) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Auto-scroll search input into view on focus (for mobile)
function autoScrollInput() {
    const input = document.getElementById('country-search');
    if (input) {
        input.addEventListener('focus', function() {
            setTimeout(() => {
                input.scrollIntoView({behavior: 'smooth', block: 'center'});
            }, 300);
        });
    }
}

// Allow closing popups with swipe down gesture
function enableSwipeToClose() {
    const info = document.getElementById('country-info');
    let startY = null;
    if (info) {
        info.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1) {
                startY = e.touches[0].clientY;
            }
        });
        info.addEventListener('touchmove', function(e) {
            if (startY !== null && e.touches.length === 1) {
                const deltaY = e.touches[0].clientY - startY;
                if (deltaY > 60) {
                    hideCountryInfo();
                    startY = null;
                }
            }
        });
        info.addEventListener('touchend', function() {
            startY = null;
        });
    }
}

// Disable long-press context menu on map for mobile
function disableMapContextMenu() {
    const map = document.getElementById('world-map');
    if (map) {
        map.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    addTouchSupport();
    preventDoubleTapZoom();
    autoScrollInput();
    enableSwipeToClose();
    disableMapContextMenu();
    // تحسين زر مسح البحث
    const searchInput = document.getElementById('country-search');
    const clearBtn = document.querySelector('.clear-search');
    if (searchInput && clearBtn) {
        searchInput.addEventListener('input', function() {
            if (searchInput.value.length > 0) {
                clearBtn.classList.add('visible');
            } else {
                clearBtn.classList.remove('visible');
            }
        });
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            clearBtn.classList.remove('visible');
            searchInput.focus();
            // إذا كان هناك نتائج بحث، أخفها
            const results = document.getElementById('search-results');
            if (results) results.classList.add('hidden');
        });
    }
    // ... existing code ...
});

