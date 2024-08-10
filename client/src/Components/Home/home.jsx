import React,{useEffect,useState} from "react";
import './home.css';

function Home(){
    const [loading, setLoading]= useState(true);
    const [contacts, setContacts]=useState({loaded:false,data:[]})
    const [rangeFilter,setRangeFilter]=useState({min:0, max:1000000000})
    const [filters,setFilters]=useState({ country:{options:[],value:''}, industry:{options:[],value:''}, role:{options:[],value:''}, CNAEmin:{value:''}, CNAEmax:{value:""}})
    
    const getCountries=async()=>{
        const response = await fetch('http://localhost:3001/countries')
        return response.json();
    }
    const getRoles=async()=>{
        const response = await fetch('http://localhost:3001/roles')
        return response.json();
    }
    const getIndustries=async()=>{
        const response = await fetch('http://localhost:3001/industries')
        return response.json();
    }
    const getUsers=async()=>{
        const response = await fetch(`http://localhost:3001/users?country=${filters.country.value}&role=${filters.role.value}&industry=${filters.industry.value}&CNAEmax=${filters.CNAEmax.value}&CNAEmin=${filters.CNAEmin.value}`)

        return response.json();
    }
    
    useEffect(()=>{
        Promise.all([getCountries(),getIndustries(),getRoles()]).then(([countries,industries,roles]) => {
            setFilters({ country:{options:countries,value:''}, industry:{options:industries,value:''}, role:{options:roles,value:''}, CNAEmin:{value:''}, CNAEmax:{value:""}})
            setLoading(false)
          });
    },[])

    useEffect(()=>{
        Promise.all([getUsers()]).then(([users]) => {
            if(!contacts.loaded){
                let max=users[0].CNAE;
                let min=users[0].CNAE;
                users.forEach(element => {
                    if(element.CNAE<min) min=element.CNAE
                    if(element.CNAE>max) max=element.CNAE
                });
                setRangeFilter({min,max})
            }
            setContacts({loaded:true,data:users})
          }).catch((error)=>{
                setContacts({loaded:true,data:[]})
                console.log(error)
          })
    },[filters])

    const handleFilter=(e)=>{
        setFilters((prev)=>({...prev,[e.target.name]:{...prev[e.target.name],value:e.target.value}}))

    }

    const translate={
        country:'Pais',
        industry:'Industria',
        role:'Rol',
        CNAEmax:'CNAE máximo',
        CNAEmin:'CNAE mínimo'
    }

    const setValue=(e)=>{
        console.log('configurando')
        const label = document.getElementById(e.target.name);
        label.textContent = `${translate[e.target.name]} ${e.target.value}`
    }

    const downloadCSV=(array, filename = 'data.csv')=> {
        // 1. Extraer las claves del primer objeto para usar como encabezados del CSV
        console.log(contacts.data[0])
        const headers = Object.keys(contacts.data[0]);
        console.log(headers)
      
        // 2. Convertir el array de objetos a una cadena en formato CSV
        const csvRows = [
          headers.join(','), // Agrega los encabezados como la primera fila
          ...contacts.data.map(obj => headers.map(header => JSON.stringify(obj[header] || '')).join(',')) // Mapea cada objeto a una fila CSV
        ];
      
        const csvString = csvRows.join('\n');
      
        // 3. Crear un blob con el contenido del CSV
        const blob = new Blob([csvString], { type: 'text/csv' });
      
        // 4. Crear un enlace de descarga
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
      
        // 5. Simular un clic para descargar el archivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    console.log(rangeFilter.max)
    return (
        <div style={{height:621+"px"}}>
            <div className="filtersContainer"></div>
            {loading?(
                <>
                spinner
                </>
            ):(
            <div className="filtersForm">
                {Object.entries(filters).map(([f,data])=>{
                    return(
                        <div className="filter" key={`${f} filter`}>
                            <label id={f}>{`${translate[f]} ${f.includes('max')?rangeFilter.max:rangeFilter.min}`}</label>
                            {f==='CNAEmax'|| f==='CNAEmin'?(
                                <input type="range" defaultValue={f.includes('max')?rangeFilter.max:rangeFilter.min} min={rangeFilter.min} max={rangeFilter.max} step="1" name={f} onMouseUp={(e)=>handleFilter(e)} onChange={(e)=>{setValue(e)}}/>
                            ):(
                            <select name={f} onChange={(e)=>handleFilter(e)}>
                                <option value="">Todos</option>
                                {data.options.map((op)=>(
                                    <option key={op.name} value={op.id}>{op.name}</option>
                                ))}
                            </select>
                            )}
                        </div>
                    )
                })}
            </div>
            )}
            {contacts?.loaded ? (
                <div className="tableContainer">
                    <div className="tablescroll">
                    <table>
                        <caption>
                            {contacts.data.length>0 ?`Leads encontrados ${contacts.data.length}`:`No encontramos ningun contacto`}
                        </caption>
                        <thead>
                            <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Industria</th>
                            <th scope="col">Rol</th>
                            <th scope="col">CNAE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.data.map((contact)=>(
                            <tr key={contact.email}>
                                <th scope="row">{contact.fullName}</th>
                                <td>{contact.email}</td>
                                <td>{contact.country.name}</td>
                                <td>{contact.industry.name}</td>
                                <td>{contact.role.name}</td>
                                <td>{contact.CNAE}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            ):(<>spinner</>)}
            <div style={{width:'100%',display: "flex", marginTop: "20px", justifyContent: "center"}}>
                <button onClick={downloadCSV}>descargar scv</button>
            </div>
        </div>
    )
}

export default Home;