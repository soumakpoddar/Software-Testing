import './App.css';
import DiseaseAnalysis from './components/analysis/DiseaseAnalysis';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <DiseaseAnalysis label="TechnoFarm" />
      
      <div className="main">
        <Home
          title="Crop Disease Detection"
          content="Through this module we want to propose a system which is able to detect disease in plants at any stage of time and propose preventive measures to avoid any further damage to crop yields. Also our system does not require its users to perform any kind of complicated activities."
          urls="https://www.letsnurture.com/wp-content/uploads/2021/02/Plant-disease-classifier-with-ai-blog-banner.jpg"
        />

        <Home
          title="Crop Disease Solution"
          content="Once a disease is detected in the crop this module provides the user with possible solution that could be applied in order to prevent the disease from affecting more based on the severity level of disease. Further the module also provides farmers."
          urls="https://www.softwebsolutions.com/wp-content/uploads/2019/08/Plant-Disease-Detection-600x381.jpg"
        />

        <Home
          title="Online Conference"
          content="The online conference module provides the farmers with a platform where live Krishi Officers (Agricultural Officers) helps farmers by solving their quires and also making them aware with schemes that government is providing to the farmers."
          urls="https://2iuddx2bbvyd177ma3mydy2j-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/Rural-person-farmer-in-agriculture-using-video-meetings-and-conferencing-to-collaborate-and-do-business-1080x675.jpg"
          buttonURL2="https://meet.google.com/"
          />
      </div>
    </div>
  );
}

export default App;