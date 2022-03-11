import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, NavigationContainerRef, useNavigation } from '@react-navigation/native';
import { getAssetByIDService, getAssetsService } from './api/services/assets';
import DataContext from './components/contexts/DataContext';
import { Asset, defaultAsset } from './api/models/assets';
import Router from './routes';

/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

// import Logo from './components/ui/Logo';

function App() {

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [assets, setAssets] = React.useState<Asset[]|null>(null);
  const [detailedAsset, setDetailedAsset] = React.useState<Asset>(defaultAsset);
  const context = {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    setLoading,
    assets,
    setAssets,
    detailedAsset,
    setDetailedAsset
  };

  const navigationRef = React.useRef<NavigationContainerRef>(null); 

  return (
    <DataContext.Provider value={context}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={async()=>{        
          const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;           
          const currentParams:any = navigationRef.current?.getCurrentRoute()?.params;
          const navigator = navigationRef.current;  
          switch(currentRouteName){
            case "List":                          
              setLoading(true);            
              await getAssetsService({setAssets,setLoading,navigator});            
              break;
            case "Detail":                                                    
              setLoading(true);
              await getAssetByIDService({idAsset:currentParams?.id,setDetailedAsset,setLoading,navigator})
              break;
          }     
        }}
      >      
        <Router/>  
        <StatusBar style="auto" />
      </NavigationContainer>
    </DataContext.Provider>
  );
}

export default App;
