export interface TypeSpecialties {
  id: string;
  image: string;
  desc: string;
  price: string;
}

interface ServicesSpecialties {
  codigo: string;
  services: TypeSpecialties[];
}

export const servicesSpecialties: ServicesSpecialties[] = [
  {
    codigo: "A001",
    services: [
      {
        id: "B00",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2021/08/Servicio-Cirugia-de-Apendice.webp",
        desc: "Cirugía Laparoscópica de Apéndice",
        price: "S/3,800.00 - S/4,500.00",
      },
      {
        id: "B01",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2021/08/Servicio-Cirugia-de-Hernia-Inguinal-Laparoscopica.webp",
        desc: "Cirugía de Hernia Inguinal Laparoscópica",
        price: "S/3,300.00 - S/3,800.00",
      },
      {
        id: "B02",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2021/08/Servicio-Cirugia-de-Hernia-Inguinal-Convencional.webp",
        desc: "Cirugía de Hernia Inguinal Convencional (Con Corte)",
        price: "S/2,300.00 - S/2,800.00",
      },
      {
        id: "B03",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Quiste-Hepatico.webp",
        desc: "Cirugía Laparoscópica de Quiste Hidatídico Hepático",
        price: "S/4,500.00 - S/5,500.00",
      },
      {
        id: "B04",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Hernia-Hiatal-Laparoscopica.webp",
        desc: "Cirugía Laparoscópica de Hernia Hiatal",
        price: "S/5,000.00 - S/7,000.00",
      },
      {
        id: "B05",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Hernia-Umbilical-Convencional.webp",
        desc: "Cirugía de Hernia Umbilical",
        price: "S/2,300.00 - S/2,800.00",
      },
      {
        id: "B06",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Hernia-Epigrastrica.webp",
        desc: "Cirugía de Hernia Epigástrica",
        price: "S/2,500.00",
      },
      {
        id: "B07",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Vesicula.webp",
        desc: "Cirugía de Vesícula Laparoscopica",
        price: "S/2,300.00 - S/2,800.00",
      },
    ],
  },
  {
    codigo: "A002",
    services: [
      {
        id: "B08",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2021/06/Servicio-Cirugia-de-Cpre.webp",
        desc: "Cpre – Cálculos Biliares",
        price: "S/2,900.00 – S/3,200.00",
      },
    ],
  },
  {
    codigo: "A003",
    services: [
      {
        id: "B09",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/03/Servicio-Balon-Gastrico.webp",
        desc: "Balón Gástrico",
        price: "S/8,500.00",
      },
      {
        id: "B10",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2022/04/Servicio-Cirugia-de-Bypass-Gastrico.webp",
        desc: "Cirugía de Bypass Gástrico",
        price: "S/11,500.00",
      },
      {
        id: "B11",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2022/04/Servicio-Cirugia-de-Manga-Gastrica.webp",
        desc: "Cirugía de Manga Gástrica",
        price: "S/8,500.00",
      },
    ],
  },
  {
    codigo: "A004",
    services: [
      {
        id: "B12",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2021/08/Servicio-Protesis-de-Cadera.webp",
        desc: "Prótesis de Cadera",
        price: "S/10,000.00 – S/19,000.00",
      },
      {
        id: "B13",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2021/08/Servicio-Cirugia-De-Fractura.webp",
        desc: "Cirugía de Fractura",
        price: "S/3,500.00 – S/12,000.00",
      },
      {
        id: "B14",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2021/08/Servicio-Fractura-de-Artroscopia.webp",
        desc: "Cirugía de Artroscopia",
        price: "S/4,500.00 – S/8,000.00",
      },
      {
        id: "B15",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Protesis-de-Rodilla.webp",
        desc: "Prótesis de Rodilla",
        price: "S/14,500.00 – S/15,500.00",
      },
      {
        id: "B16",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Tunel-Carpiano.webp",
        desc: "Cirugía de Túnel del Carpo",
        price: "S/3,500.00 – S/4,500.00",
      },
    ],
  },
  {
    codigo: "A005",
    services: [
      {
        id: "B17",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/04/Cauterizacion-de-Verrugas-VPH-Hombres.webp",
        desc: "Verrugas Genitales Hombres",
        price: "S/200.00",
      },
      {
        id: "B18",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/04/Servicio-Cirugia-de-Vasectomia.png",
        desc: "Vasectomía",
        price: "S/2,000.00 – S/2,500.00",
      },
      {
        id: "B19",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/04/Servicio-Cirugia-de-Varicocele.webp",
        desc: "Cirugía de Varicocele",
        price: "S/2,000.00 – S/2,500.00",
      },
      {
        id: "B20",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/04/Servicio-Cirugia-de-Prostata.webp",
        desc: "Cirugía de Próstata",
        price: "S/3,500.00 – S/8,500.00",
      },
      {
        id: "B21",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/04/Servicio-Cirugia-de-Calculo-Renal.webp",
        desc: "Cirugía de Cálculo Renal",
        price: "S/5,500.00 – S/6,500.00",
      },
      {
        id: "B22",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Circuncision-en-adultos.webp",
        desc: "Circuncisión en Adultos",
        price: "S/2,000.00 – S/22,400.00",
      },
      {
        id: "B23",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Hidrocele.webp",
        desc: "Cirugía de Hidrocele",
        price: "S/2,000.00 – S/2,500.00",
      },
    ],
  },
  {
    codigo: "A006",
    services: [
      {
        id: "B24",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Hernia-Inguinal.png",
        desc: "Hernia Inguinal",
        price: "S/2,500.00",
      },
      {
        id: "B25",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Hernia-Umbilical-Bebes.png",
        desc: "Hernia Umbilical",
        price: "S/1,800.00",
      },
      {
        id: "B26",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Exceresis-de-Tumores-de-Partes-Blandas.webp",
        desc: "Exceresis de Tumores de Partes Blandas",
        price: "S/1,600.00",
      },
      {
        id: "B27",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Hidrocele-Bebe.png",
        desc: "Hidrocele Niños",
        price: "S/2,800.00",
      },
      {
        id: "B28",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Testiculo-No-Descendido.png",
        desc: "Testículo no Descendido",
        price: "S/3,500.00",
      },
      {
        id: "B29",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Apendicitis-Aguda-Ninos.png",
        desc: "Apendicitis Aguda",
        price: "S/3,500.00",
      },
      {
        id: "B30",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-de-Colecistectomia.png",
        desc: "Colecistectomia",
        price: "S/3,000.00",
      },
    ],
  },
  {
    codigo: "A007",
    services: [
      {
        id: "B31",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-De-Tiroides.webp",
        desc: "Cirugía de Tiroides",
        price: "S/3,400.00 – S/3,800.00",
      },
    ],
  },
  {
    codigo: "A008",
    services: [
      {
        id: "B32",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Biopsia-de-Mama-sin-Corte.webp",
        desc: "Biopsia de Mamá sin Corte",
        price: "S/1,500.00",
      },
      {
        id: "B33",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Biopsia-de-Mama-con-Corte.webp",
        desc: "Biopsia de Mamá con Corte",
        price: "S/1,000.00",
      },
      {
        id: "B34",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Tratamiento-de-las-Mamas-Accesorias.webp",
        desc: "Tratamiento de las Mamás Accesorias",
        price: "S/1,000.00",
      },
      {
        id: "B35",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-Oncoplastica-de-Mama.webp",
        desc: "Cirugía Oncoplastica de Mamá",
        price: "S/3,000.00",
      },
      {
        id: "B36",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-Tratamiento-Ginecomastia.webp",
        desc: "Tratamiento de Ginecomastia",
        price: "S/1,000.00",
      },
      {
        id: "B37",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-Mastectomia_Radical.webp",
        desc: "Mastectomia Radical",
        price: "S/2,500.00",
      },
      {
        id: "B38",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-Tumores-de-Ganglios-Axilares.webp",
        desc: "Tumores y Ganglios en la Axila",
        price: "S/1,000.00",
      },
      {
        id: "B39",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Cirugia-Tumor-de-Mamas.webp",
        desc: "Tumor de Mamá",
        price: "S/1,000.00",
      },
    ],
  },
  {
    codigo: "A009",
    services: [
      {
        id: "B40",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Extirpacion-de-Utero.webp",
        desc: "Extirpación de útero",
        price: "S/3,500.00",
      },
      {
        id: "B41",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Miomas_Uterinos.webp",
        desc: "Miomas Uterinos",
        price: "S/3,000.00",
      },
      {
        id: "B42",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Histerectomia-Laparoscopica.webp",
        desc: "Histerectomia Laparoscópica",
        price: "S/4,500.00",
      },
      {
        id: "B43",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Histerectomia-Vaginal.webp",
        desc: "Histerectomia Vaginal",
        price: "S/3,500.00",
      },
      {
        id: "B44",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2019/11/Servicio-Miomamectomia-Laparoscopica.webp",
        desc: "Miomectomia Laparoscópica",
        price: "S/4,000.00",
      },
    ],
  },
  {
    codigo: "A010",
    services: [
      {
        id: "B45",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/03/cancer-del-pancreas.jpg",
        desc: "Cáncer del Páncreas",
        price: "S/60,000.00",
      },
      {
        id: "B46",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/03/sarcomas-tejidos-blandos-1.jpg",
        desc: "Sarcomas de Tejidos Blandos",
        price: "S/4,000.00",
      },
      {
        id: "B47",
        image:
          "https://cirugia24horas.com/wp-content/uploads/2024/03/cancer-de-piel.jpg",
        desc: "Cáncer de Piel",
        price: "S/3,500.00",
      },
    ],
  },
];
