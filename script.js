const translations = {
  tr: {

    softwareengineer: "Yazılım Mühendisi",
    homepage: "Ana Sayfa",
    contact: "İletişim",
    education: "Eğitim",
    projects: "Projelerim",
    welcome: "Hoş geldiniz!",
    intro: `Ben Yusuf Gürcan, 2025 Haziran ayında Kırklareli Üniversitesi Yazılım Mühendisliği bölümünden mezun oldum. <br>
Eğitimim süresince yazılım geliştirme süreçlerine hâkimiyet kazandım ve özellikle web teknolojileri (HTML, CSS, JavaScript) üzerine yoğunlaştım. <br>
 Ayrıca, <b class="text-primary"> Java, C++ ve Python</b> gibi programlama dillerinde de deneyim sahibiyim.
Eğitimim boyunca çeşitli projelerde yer aldım ve bu projeler sayesinde problem çözme, takım çalışması ve yazılım geliştirme süreçlerine dair önemli beceriler edindim.
<br>  
<b class="text-primary"> C#, .NET , C , C++ </b> dili ve doğal dil işleme (NLP) gibi alanlarda bireysel ve ekip projelerinde görev aldım.
Kod kalitesine, sürdürülebilirliğe ve problem çözme becerisine önem veren, öğrenmeye açık ve disiplinli bir geliştiriciyim.
<br>
<b>Kariyer hedefim;</b> yazılım geliştirme alanında uzmanlaşmak ve yaratıcı, katma değer sağlayan projelerde etkin rol almaktır.
Yazılım geliştirme konusunda tutkuluyum ve sürekli öğrenmeye açığım.`,
    cvNote: `Bu CV, benim hakkımda daha fazla bilgi edinmenizi sağlamak için hazırlandı. İletişim bilgilerim, eğitim geçmişim ve hazırladığım projelere yukarıdaki düğmelerde ulaşabilirsiniz.`,
    telephone: "Telefon",
    email: "E-posta",
    uni1: `<strong>İstanbul Bilgi Üniversitesi</strong> - Matematik %100 burslu <br>2018 - 2021 Tamamlanmadı`,
    uni2: `<strong>Kırklareli Üniversitesi</strong> – Yazılım Mühendisliği<br>2021 - 2025 Mezun Ort: 3.28`,
    certificates: "Sertifikalarım",
    certificate1: `C++ ile Programlamaya Giriş`,
    certificate2: `CSS Temelleri`,
    certificate3: `HTML5 ile Web Geliştirme`,
    certificate4: `JAVA ile Programlamaya Giriş`,
    certificate5: `jQuery ile Web Programcılığı`,
    certificate6: `Kotlin ile Android Mobil Uygulama Geliştirme`,
    certificate7: `Uygulamalarla SQL Öğreniyorum`,
    view: "İncele",
    projects: `Projelerim`,
    copy: `2025 Yusuf Gürcan`,
    info: `Bu CV, kişisel bilgiler içermektedir ve sadece referans amaçlıdır.`,



  },
  en: {

    softwareengineer: "Software Engineer",
    homepage: "Home Page",
    contact: "Contact",
    education: "Education",
    projects: "My Projects",
    welcome: "Welcome!",
    intro: `I'm Yusuf Gürcan, a June 2025 graduate of Kırklareli University, Department of Software Engineering. <br>
During my studies, I gained strong knowledge of software development processes and focused particularly on web technologies such as HTML, CSS, and JavaScript. <br>
In addition, I have experience in programming languages like <b class="text-primary"> Java, C++, and Python</b>.
Throughout my education, I participated in various projects where I developed essential skills in problem-solving, teamwork, and software development practices.
<br>  
I also took part in individual and team projects in areas such as <b class="text-primary">C#, .NET, C, C++</b> and natural language processing (NLP).
I’m a developer who values code quality, sustainability, and problem-solving, and I’m open to learning with a disciplined mindset.
<br>
<b>My career goal</b> is to specialize in software development and take an active role in creative, value-adding projects.
I am passionate about software development and always eager to learn.`,

    cvNote: `This CV was prepared to provide more information about me. You can access my contact details, educational background, and the projects `,

    telephone: "Phone",
    email: "Email",

    uni1: `<strong>Istanbul Bilgi University</strong> – Mathematics, 100% Scholarship <br>2018 - 2021 Not Completed`,
    uni2: `<strong>Kırklareli University</strong> – Software Engineering<br>2021 - 2025 Graduated GPA: 3.28`,

    certificates: "My Certificates",
    certificate1: `Introduction to Programming with C++`,
    certificate2: `CSS Fundamentals`,
    certificate3: `Web Development with HTML5`,
    certificate4: `Introduction to Programming with Java`,
    certificate5: `Web Programming with jQuery`,
    certificate6: `Android App Development with Kotlin`,
    certificate7: `Learning SQL with Practical Examples`,

    view: "View",
    projects: `My Projects`,
    copy: `2025 Yusuf Gürcan`,
    info: `This CV contains personal information and is for reference purposes only.`,

  }
};



document.querySelectorAll('.menu-categories button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    // Tüm bölümleri kapat
    document.querySelectorAll('.menu-section').forEach(section => {
      section.classList.remove('active');
    });

    // Hedef bölümü aç
    targetSection.classList.add('active');

    // Görünür alana kaydır
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const elements = document.querySelectorAll('[data-key]');

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // innerHTML çünkü içinde <b> var
    }
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.getAttribute('data-lang');
    setLanguage(selectedLang);
  });
});

// Varsayılan dil
setLanguage('tr');