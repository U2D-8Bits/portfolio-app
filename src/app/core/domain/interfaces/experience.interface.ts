//********************************************/
//* Interfaz de Experiencia Profesional
//********************************************/


export interface ExperienceInterface {

  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  description: string;
  logoUrl?: string;
}
