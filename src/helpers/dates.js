import { addDays, endOfYear, format} from 'date-fns'
import { es} from 'date-fns/locale'

export const hoy = format(new Date(),'yyyy-MM-dd',{locale:es});


export const generarFechasProgramacion=(fechaInicial= new Date(),frecuencia= new Number())=>{
    let dates =[new Date(`${fechaInicial}T00:00:00`)];   
    
    for( let i = 0; addDays( new Date( dates[i] ),frecuencia)  < endOfYear(new Date()) ; i++ ){
        dates.push( addDays( new Date( dates[i] ),frecuencia ) )
    }    
    return dates
}