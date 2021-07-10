const INITIAL_STATE = {
  sections: [
    {
      title: "tablet",
      imageUrl:
        "https://images.unsplash.com/photo-1527698266440-12104e498b76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      id: 1,
      linkUrl: "shop/tablet",
    },
    {
      title: "console",
      imageUrl:
        "https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      id: 2,
      linkUrl: "shop/console",
    },
    {
      title: "software",
      imageUrl:
        "https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
      id: 3,
      linkUrl: "shop/software",
    },
    {
      title: "desktop",
      imageUrl:
        "https://images.unsplash.com/photo-1426024120108-99cc76989c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/desktop",
    },
    {
      title: "laptop",
      imageUrl:
        "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/laptop",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
};

export default directoryReducer;