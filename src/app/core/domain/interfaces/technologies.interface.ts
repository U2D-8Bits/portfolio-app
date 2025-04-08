//************************************************************/
//* Interfaz de las Tecnologías
//************************************************************/

export interface TechnologiesInterface {
  svgUrl: string;
  alt: string;
  category: 'Frontend' | 'Backend' | 'Learning' | 'Tools';
  featured?: boolean;
}

export type TechnologyCategory = TechnologiesInterface['category'];


