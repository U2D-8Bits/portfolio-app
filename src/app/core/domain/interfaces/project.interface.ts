//************************************************************/
//* Interfaz de los Proyectos
//************************************************************/

export interface ProjectInterface {

  name: string;
  description: string;
  technologies: string[];
  image?: string;
  url?: string;
  repository?: string;
  type: 'FullStack' | 'FrontEnd' | 'BackEnd';
  bgColor: string;
  isPrivate: boolean;
}
