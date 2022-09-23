const listCoffees = () => {
  return [
    {
      nome: "item1",
      preparo: 1.5,
      img: "img",
      acres: [
        {
          nomeAcres: "acres1",
          preparoAcres: 2,
        },
      ],
    },
    {
      nome: "item2",
      preparo: 1.2,
      img: "img",
      acres: [
        {
          nomeAcres: "acres2",
          preparoAcres: 1,
        },
      ],
    },
  ];
};

export default listCoffees;
