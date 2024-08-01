import React, {useState, useEffect} from 'react'

import './Manuscript.css'

export default function Manuscript() {

  const images = [
    "/img/manuscripts/20230111_171635.jpg",
    "/img/manuscripts/20230111_170107.jpg",
    "/img/manuscripts/20230111_170111.jpg",
    "/img/manuscripts/20230111_170211.jpg",
    "/img/manuscripts/20230222_170222.jpg",
    "/img/manuscripts/20230111_170319.jpg",
    "/img/manuscripts/20230111_170444.jpg",
    "/img/manuscripts/20230111_170516.jpg",
    "/img/manuscripts/20230111_170518.jpg",
    "/img/manuscripts/20230111_170707.jpg",
    "/img/manuscripts/20230111_170748.jpg",
    "/img/manuscripts/20230111_170800.jpg",
    "/img/manuscripts/20230111_170800.jpg",
    "/img/manuscripts/20230111_170814.jpg",
    "/img/manuscripts/20230111_170836.jpg",
    "/img/manuscripts/20230111_170857.jpg",
    "/img/manuscripts/20230111_170901.jpg",
    "/img/manuscripts/20230111_170947.jpg",
    "/img/manuscripts/20230111_171103.jpg",
    "/img/manuscripts/20230111_171152.jpg",
    "/img/manuscripts/20230111_171215.jpg",
    "/img/manuscripts/20230111_171222.jpg",
    "/img/manuscripts/20230111_171333.jpg",
    "/img/manuscripts/20230111_171337.jpg",
    "/img/manuscripts/20230111_171343.jpg",
    "/img/manuscripts/20230111_171351.jpg",
    "/img/manuscripts/20230111_171419.jpg",
    "/img/manuscripts/20230111_171422.jpg",
    "/img/manuscripts/20230111_171429.jpg",
    "/img/manuscripts/20230111_171432.jpg",
    "/img/manuscripts/20230111_171451.jpg",
    "/img/manuscripts/20230111_171510.jpg",
    "/img/manuscripts/20230111_171541.jpg",
    "/img/manuscripts/20230111_171550.jpg",
    "/img/manuscripts/20230111_171551.jpg",
    "/img/manuscripts/20230111_171552.jpg",
    "/img/manuscripts/20230111_171609.jpg",
    "/img/manuscripts/20230111_171617.jpg",
    "/img/manuscripts/20230111_171645.jpg",
    "/img/manuscripts/20230111_171653.jpg",
    "/img/manuscripts/20230111_171726.jpg",
    "/img/manuscripts/20230111_171742.jpg",
    "/img/manuscripts/20230111_171754.jpg",
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 100);

    return () => clearInterval(interval);
  }, [images.length]);

  

  return (
    <section className='manuscriptSection'>

    <div className="manuscriptHeading">
      <h1>Manuscripts</h1>
    </div>
    <hr />

    <h5>केंद्रीय पुस्तकालय बरकतुल्लाह विश्वविद्यालय में अति दुर्लभ प्राचीन 64 पांडुलिपियों एवं अति प्राचीन  दुर्लभ 21 ग्रंथ  उपलब्ध हैं, जो कि अत्यंत जीर्ण अवस्था में है जिनका तात्काल रासायनिक संरक्षण करना अति आवश्यक है अन्यथा यह  नष्ट हो जाएंगे! 
    </h5>

    <div className="manuContent">
      <div className="actionManu">
      
     <strong> पद क्रमांक 1 </strong> <br />
 <h4>पुस्तकालय द्वारा इस दिशा में प्रयास करते हुए  विभिन्न संस्थाओं को पत्र लिखा जिसमें से तीन संस्थान ने रासायनिक उपचार में रूचि दिखाई एवं दो संस्थान ने रासायनिक उपचार में आने वाले व्यय का विवरण भेजा है:- व्यय विवरण संलग्न है </h4>
<br />

<ul>
 <li>A- राष्ट्रीय सांस्कृतिक सम्पदा संरक्षण अनुसंधान (संस्कृति विभाग भारत सरकार)  लखनऊ </li>
<li>B- कलाकृति कन्जरवेशन एसोसिएशन - जानकीपुरम लखनऊ</li>
<li> C- धरोहर पुरास्थल पुरावस्तु एवं सामाजिक संरक्षण संस्था भोपाल। </li>
<li>D- निदेशक ,राष्ट्रीय पाण्डुलिपि मिशन
     इन्द्रिरा गांधी राष्ट्रीय कला केन्द्र   जनपथ भवन, नई दिल्ली</li>
</ul>
<br />
<ul>
<li>(अ) 
शोधार्थियों/ विद्यार्थियों  के उपयोग के लिए पांडुलिपियों का डिजिटाइजेशन कराने का प्रस्ताव है</li>


<li>(आ) 
शोधार्थियों के लिए पांडुलिपि संग्रहालय एवं अध्ययन केंद्र की स्थापना   किया जाना प्रस्तावित है ,</li>

<li>(इ) 
बहुत से व्यक्ति एवं संस्था विश्वविद्यालय को पाण्डुलिपियाँ भेंट स्वरूप प्रदान करना चाहते हैं, अत: प्राचीन पाण्डुलिपि संकलन केन्द्र  प्रस्तावित है। </li>

<li>(ई) 
शोधार्थियों के  लिये माधवरावसप्रे संग्रहालय, दुष्यंत कुमार पाण्डुलिपि संग्रहालय आदि  से MOU करने हेतु प्रस्ताव है</li>

<li>(उ) 
विशेषज्ञों से चर्चा अनुसार पाण्डुलिपियों को लकड़ी के अलमारी - लकड़ी के डिस्प्ले-बाक्स एवं उचित तापमान के में रखना चाहिए , अतः उपरोक्त सामग्री क्रय किया जाना प्रस्तावित है। </li>

<li> (ऊ) दुर्लभ पांडुलिपियों के रासायनिक उपचार, डिजिटाइजेशन,संकलन एवं अध्ययन केंद्र की स्थापना इत्यादि के संबंध में जिन संस्थाओं से संपर्क किया गया है उनके साथ पृथक बैठक आयोजित की जाकर विचार विमर्श अति आवश्यक है,ताकि इस दिशा में कोई ठोस निर्णय लिया जा सके जिससे आगामी 'नेक' में लाभ लिया जा सके ।
 </li>

</ul>
</div>

<div className="photoRight">
  <img src="/public/img/manuscriptsList.jpg" alt="" />
</div>

</div>


<div className="manuPhotoGallery">
<img src={images[currentIndex]} alt="slideshow" />
</div>

    </section>
  )
}
