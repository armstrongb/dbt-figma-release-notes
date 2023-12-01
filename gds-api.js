const file_key = "wVCT2ObiDNlUwziUFQB3yI";
const token = "figd_ggyUpbUx1gHKezt3T-Al36kBLjIGM6oQebUyf_pH";

const BASE_URL = "https://api.figma.com/";

    const FIGMA_API_KEY = token; 
    const FIGMA_FILE_ID = file_key; 

if(FIGMA_API_KEY != null && FIGMA_FILE_ID != null) {
        async function getVersion() {
            let result = await fetch(BASE_URL+'v1/files/'+FIGMA_FILE_ID+'/versions', {
                method: 'GET',
                headers: {
                    'X-Figma-Token': FIGMA_API_KEY
                }
            })
            let figmaVersion = await result.json();

			output = JSON.stringify(figmaVersion, null, 2);
            
			verContent = JSON.parse(output);

			var i=0;
			console.log(verContent);

			verContent.versions.forEach((val) => document.getElementById("v-output").insertAdjacentHTML('beforeend', 
				'<dl class="v-update" id="v-'+verContent.versions[i].id+'">'+
				'<dt>Release notes:</dt>'+
				'<dd id="v-desc">'+verContent.versions[i].description+'</dd>'+
				'<dt>Date:</dt>'+
				'<dd class="v-date">'+verContent.versions[i++].created_at.replace("T"," ").slice(0,16)+'</dd></dl>'));

        }
        getVersion();

		async function getFile() {
            let result = await fetch(BASE_URL+'v1/files/'+FIGMA_FILE_ID+'', {
                method: 'GET',
                headers: {
                    'X-Figma-Token': FIGMA_API_KEY
                }
            })
            let figmaFile = await result.json();

			file = JSON.stringify(figmaFile, null, 2);
            
			fileContent = JSON.parse(file);

			var i=0;
			console.log(fileContent);

			document.getElementById("file-title").innerText = fileContent.name;
			document.getElementById("file-thumb").src = fileContent.thumbnailUrl;

        }
        getFile();
}