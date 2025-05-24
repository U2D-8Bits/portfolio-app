import { Injectable } from '@angular/core';
import { ExperienceInterface } from '../../../core/domain/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {
  private experiences: ExperienceInterface[] = [
    {
        company: 'Security Doctors',
        position: 'Desarrollador Frontend',
        startDate: new Date('2025-03-09'),
        endDate: new Date('2025-05-31'),
        description: 'Diseñé e implementé módulos interactivos orientados al análisis estratégico empresarial, incorporando modelos como FODA y PESTEL para facilitar la toma de decisiones corporativas. Automatizé la importación de datos mediante la integración de archivos Excel, mejorando significativamente los tiempos operativos. Establecí una comunicación fluida entre frontend y backend a través de múltiples endpoints REST, asegurando la consistencia en tiempo real. Participé activamente en entornos ágiles mediante revisiones de código, planificación de sprints y resolución colaborativa de incidencias. La experiencia de usuario fue optimizada con interfaces adaptables, enfocadas en rendimiento y usabilidad.'
    },
    {
        company: 'Consultorio Médico Milagro',
        position: 'Desarrollador Full Stack',
        startDate: new Date('2024-04-02'),
        endDate: new Date('2024-12-31'),
        description: 'Lideré el desarrollo completo de una plataforma de telemedicina asíncrona para pacientes diabéticos, abarcando desde la arquitectura técnica hasta su implementación final. Utilicé Angular y NestJS para crear una solución escalable con funcionalidades como gestión de citas, historial clínico y comunicación médico-paciente. Aseguré la integridad y confidencialidad de los datos médicos aplicando estándares de validación y seguridad. Colaboré estrechamente con el equipo médico, alineando las funcionalidades con necesidades reales del entorno clínico.'
    },
    {
      company: 'GISSAN (ESPOCH)',
      position: 'Practicante Desarrollador Full Stack',
      startDate: new Date('2023-10-02'),
      endDate: new Date('2024-02-28'),
      description: 'Desarrollé el Frontend de la página web de GISSAN con Angular, creando una interfaz intuitiva y responsive, e implementé la limpieza de ubicaciones geográficas mediante MyMaps para un censo preciso. Optimicé el flujo de datos reconectando Looker con Google Drive, facilitando el acceso a información crítica. Colaboré en metodologías ágiles para entregas oportunas y desarrollé un sistema de scrapping en Google Colab para extraer datos automatizados de Riobamba.com.ec.'
    },
    {
      company: 'Municipio de Riobamba',
      position: 'Practicante Desarrollador Full Stack',
      startDate: new Date('2023-11-02'),
      endDate: new Date('2023-12-31'),
      description: 'Colaboré con el equipo de informática y comunicaciones para analizar problemáticas, desarrollé pruebas automatizadas con Dynamo BIM para optimizar análisis de sistemas, y capacité al equipo en el uso de esta herramienta, asegurando la correcta ejecución de las pruebas.'
    },
    {
      company: 'DTIC (ESPOCH)',
      position: 'Practicante Desarrollador Frontend',
      startDate: new Date('2023-04-01'),
      endDate: new Date('2023-09-30'),
      description: 'Como parte integral del equipo de desarrollo, trabajé en estrecha colaboración con el área de producción para analizar, interpretar y transformar los requerimientos empresariales en soluciones técnicas robustas, con especial enfoque en la optimización de sistemas de gestión de inventarios. Utilizando Angular y TypeScript, diseñé y desarrollé componentes modulares y reutilizables que mejoraron la estructura del código y facilitaron el mantenimiento futuro. Además, optimicé la interfaz de usuario, logrando un incremento del 20% en la eficiencia general del sistema. '
    },
  ];

  getExperiences(): ExperienceInterface[] {
    return this.experiences;
  }
}