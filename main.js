require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/layers/GeoJSONLayer",
    "esri/widgets/Home",
    "esri/smartMapping/renderers/color",
    "esri/smartMapping/symbology/color",
    "esri/smartMapping/symbology/support/colorRamps",
    "esri/layers/GraphicsLayer",
    "esri/smartMapping/statistics/summaryStatistics",
    "esri/widgets/Expand",
    "esri/widgets/Editor",
    "esri/renderers/UniqueValueRenderer"
], (
    Map,
    MapView,
    FeatureLayer,
    Legend,
    GeoJSONLayer,
    Home,
    colorRendererCreator,
    colorSymbology,
    colorRamps,
    Graphic,
    SummaryStatistics,
    Expand,
    Editor,
    UniqueValueRenderer

) => {
   
    const lyr = new FeatureLayer({
        url: "https://services8.arcgis.com/QF1SFulWoGe9X2JG/arcgis/rest/services/EPADPDemo/FeatureServer",
        title : "Projects"
      });
    

      const lyrInfos = {
        layer: lyr,
        groupDisplay: "sequential",
        formTemplate: {
          title: "Project information",
          elements: [
            {
              type: "group",
              label: "Basic information",
              elements: [
                {
                    type: "field",
                    fieldName: "ArabicName",
                    label: "Arabic Name"
                  },
                  {
                    type: "field",
                    fieldName: "EnglishName",
                    label: "English Name"
                  },
                  {
                    type: "field",
                    fieldName: "Type",
                    label: "Type"
                  },
                  {
                    type: "field",
                    fieldName: "Area",
                    label: "Area"
                  }
              ]
            }, 
            {
                type: "group",
                label: "Location data",
                elements: [
                    {
                        type: "field",
                        fieldName: "Sector",
                        label: "Sector"
                      },
                      {
                        type: "field",
                        fieldName: "Directorate",
                        label: "Directorate"
                      },
                      {
                        type: "field",
                        fieldName: "Section",
                        label: "Section"
                      },
                      {
                        type: "field",
                        fieldName: "Governorate",
                        label: "Governorate"
                      }
                      
                ]
            }, 
            {
                type: "group",
                label: "Drains",
                elements: [
                    {
                        type: "field",
                        fieldName: "DrainEnglishName",
                        label: "Drain English Name"
                      },
                      {
                        type: "field",
                        fieldName: "DrainArabicName",
                        label: "Drain Arabic Name"
                      }
                ]
            }
        ]
            
        },
        // enabled: true, // default is true, set to false to disable editing functionality
        // addEnabled: true, // default is true, set to false to disable the ability to add a new feature
        // updateEnabled: false, // default is true, set to false to disable the ability to edit an existing feature
        // deleteEnabled: false // de
      };  

    const map = new Map({
        basemap: "satellite",
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [30.855,29],
        zoom:18,
    });

    map.add(lyr)

   
    const editor = new Editor({
        view: view,
        layerInfos: [lyrInfos]
      });
      layerListExpand = new Expand({
        expandIconClass: "esri-icon-edit \ue61b",  
        expandTooltip: "Expand editor tooltip", 
        view: view,
        content: editor
      });
      view.ui.add(layerListExpand, "top-right");

      // Add the widget to the view
    //   view.ui.add(editor, "top-right");

    // view.ui.move("zoom", "top-right");
    let homeWidget = new Home({ view: view });
    view.ui.add(homeWidget, "top-left");
  

});
