import './App.css';
import {FileManagerComponent, NavigationPane, Toolbar, DetailsView, Inject} from '@syncfusion/ej2-react-filemanager';
function App() {
  const host_URL = "https://ej2-aspcore-service.azurewebsites.net/";
  return (
    <div className="App">
      <FileManagerComponent ajaxSettings={{
        url: host_URL+"api/FileManager/FileOperations",
        downloadUrl: host_URL+"api/FileManager/Download",
        uploadUrl: host_URL+"api/FileManager/Upload",
        getImageUrl: host_URL+"api/FileManager/GetImage"
      }}>
        <Inject services={[NavigationPane, Toolbar, DetailsView]}></Inject>
      </FileManagerComponent>
    </div>
  );
}

export default App;
