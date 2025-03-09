import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Nouveau Projet : Soutien aux Orphelins",
    paragraph:
      "Nous avons lancé un nouveau projet pour offrir un environnement sûr et éducatif aux orphelins. Découvrez comment vous pouvez nous aider.",
    image: "/images/orph3.jpeg", // Remplacez par le chemin de votre image
    author: {
      name: "Akonda Munse Ornella",
      image: "/images/team1.jpeg", // Remplacez par le chemin de l'image de l'auteur
      designation: "Fondatrice de la Hikani Fondation",
    },
    tags: ["Enfants"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Célébration de Noël avec les Sans-Abris",
    paragraph:
      "Nous avons organisé une célébration de Noël pour les sans-abris, offrant des repas chauds et des vêtements. Retour sur cet événement mémorable.",
    image: "/images/orph2.jpeg", // Remplacez par le chemin de votre image
    author: {
      name: "Priscille Mibanga",
      image: "/images/team1.jpeg", // Remplacez par le chemin de l'image de l'auteur
      designation: "Présidente AI de la Fondation",
    },
    tags: ["Solidarité"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Formation pour les Veuves",
    paragraph:
      "Nous avons lancé un programme de formation pour aider les veuves à acquérir des compétences professionnelles et à retrouver leur autonomie.",
    image: "/images/orph4.jpeg", // Remplacez par le chemin de votre image
    author: {
      name: "Gaëlle Nsala",
      image: "/images/gaelle.jpeg", // Remplacez par le chemin de l'image de l'auteur
      designation: "Vice Présidente",
    },
    tags: ["Autonomie"],
    publishDate: "2024",
  },
];
export default blogData;
