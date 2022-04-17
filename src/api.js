const recipes = [
    {
        id: 1,
        title: "Creme Brulee",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-creme-brulee_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1567523601035.jpeg"
    },
    {
        id: 2,
        title: "Cinnamon Rolls",
        category: "Breakfast",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.thespruceeats.com/thmb/LztCwx-RV2XEcA9MuOG5Oqf7D44=/1606x1070/filters:fill(auto,1)/quick-cinnamon-rolls-3053776-81543bd7548c4b7fa95b8c51aaec316d.jpg"
    },
    {
        id: 3,
        title: "Tiramisu",
        category: "Dessert",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.mybakingaddiction.com/wp-content/uploads/2021/01/plated-tiramisu.jpg"
    },
    {
        id: 4,
        title: "Pancakes",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://i.ytimg.com/vi/s9FNPJ_1BH8/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "Eggs Benedict",
        category: "Breakfast",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.tastingtable.com/img/gallery/eggs-benedict-recipe-breakfast/image-import.jpg"
    },
    {
        id: 6,
        title: "Crepes",
        category: "Breakfast",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tKEByV1mHEpX57scVLSdJhdxM1sOheSQ6w&usqp=CAU"
    },
    {
        id: 7,
        title: "Carrot Cake",
        category: "Dessert",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/16/0/ry0401_carrotcake.jpg.rend.hgtvcom.616.462.suffix/1552488933139.jpeg"
    },
    {
        id: 8,
        title: "Cheesecake",
        category: "Dessert",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.thespruceeats.com/thmb/dNQ-WUJrzyDDT5lydjmeAIc7dTY=/2000x1422/filters:fill(auto,1)/strawberry-cheesecake-4588014-03-5a5769c5f121456c8b4aa5c7c6e06f61.jpg"
    },
    {
        id: 9,
        title: "Steak Bites",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F02%2F12%2Fgarlic-butter-steak-bites-FT-RECIPE0221.jpg"
    },
    {
        id: 10,
        title: "Mac & Cheese",
        category: "Lunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://media.istockphoto.com/photos/baked-mac-and-cheese-picture-id1194753924"
    },
    {
        id: 11,
        title: "Oatmeal",
        category: "Breakfast",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.lacademie.com/wp-content/uploads/2021/09/oatmeal-blueberry-raspberry.jpg"
    },
    {
        id: 12,
        title: "Banana Bread",
        category: "Breakfast",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://goop-img.com/wp-content/uploads/2021/11/Jessica-Seinfeld_004_Chocolate-Banana-Bread_Jessica-Seinfeld_2020-09-17_mark-weinberg_0756-1-1-2.jpg"
    },

    {
        id: 13,
        title: "Lasagna",
        category: "Lunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
    },

    {
        id: 14,
        title: "Grilled Salmon",
        category: "Dinner",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://lifeloveandgoodfood.com/wp-content/uploads/2015/11/Best-Grilled-Salmon_9331-2.jpg"
    },
    {
        id: 15,
        title: "Schrimp Alfredo",
        category: "Dinner",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sy3D6RgfKpWFMH6nZtH8tYD1Y_Rru9FwAQ&usqp=CAU"
    },
    {
        id: 16,
        title: "Tacos",
        category: "Bruch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://c.ndtvimg.com/2021-09/10cgsus8_tacos_625x300_09_September_21.jpg"
    },
    {
        id: 17,
        title: "Pasta Bolognese",
        category: "Lunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://img.delicious.com.au/Am3XFHpa/del/2018/01/speedy-spaghetti-bolognese-74892-2.jpg"
    },
    {
        id: 18,
        title: "Bruschetta",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://hips.hearstapps.com/hmg-prod/images/190508-bruschetta-horizontal-2-1558014808.png"
    },
    {
        id: 19,
        title: "Pasta Alfredo",
        category: "Lunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.budgetbytes.com/wp-content/uploads/2017/07/Lighter-Spinach-Alfredo-Pasta-finished.jpg"
    },
    {
        id: 20,
        title: "Pizza",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg"
    },
    {
        id: 21,
        title: "Rainbow Trout",
        category: "Dinner",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://mealplannerpro.com/images/recipes/4/692189.jpg"
    },
    {
        id: 22,
        title: "Chicken and rice",
        category: "Lunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://images-gmi-pmc.edge-generalmills.com/75a7343a-1520-4e95-a13f-e61b5fc5b741.jpg"
    },
    {
        id: 23,
        title: "Avocado Toast",
        category: "Brekfast",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.simplygoodfats.com/wp-content/uploads/2018/07/Smoked-Salmon-Avocado-Toast-2-1600x1067.jpg"
    },

    {
        id: 24,
        title: "Pasta Pomodoro",
        category: "Lunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.giallozafferano.it/images/221-22163/Spaghetti-al-pomodoro_650x433_wm.jpg"
    },
    {
        id: 25,
        title: "Pork Chop and Mashed Potatoes",
        category: "Dinner",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://images.eatsmarter.com/sites/default/files/styles/1600x1200/public/pork-chops-with-mashed-potatoes-615746.jpg"
    },

    {
        id: 26,
        title: "Chicken Nuggets",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://food-images.files.bbci.co.uk/food/recipes/breaded_chicken_nuggets_35643_16x9.jpg"
    },
    {
        id: 27,
        title: "Tahini Brownies",
        category: "Breakfast",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg"
    },
    {
        id: 28,
        title: "Greek Salad",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-500x375.jpg"
    },
    {
        id: 29,
        title: "Porterhouse",
        category: "Dinner",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://img.taste.com.au/h-55rUSp/taste/2016/11/porterhouse-steak-with-herb-butter-and-crispy-garlic-rosemary-potatoes-101873-1.jpeg"
    },
    {
        id: 30,
        title: "Caesar Salad",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2008/01/chicken-caesar-salad-1-scaled.jpg?fit=1200%2C800&ssl=1"
    },
    {
        id: 31,
        title: "Gyros",
        category: "Brunch",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://img.taste.com.au/Gyrlve4B/taste/2016/11/greek-chicken-gyros-with-yoghurt-sauce-108192-1.jpeg"
    },
    {
        id: 32,
        title: "Barbecue Sliders",
        category: "Dinner",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_05/1532849/sara-gore-today-main-200128-02.jpg"
    },

    {
        id: 33,
        title: "Tuna Steak",
        category: "Dinner",
        recipe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
        img: "https://www.mygourmetconnection.com/wp-content/uploads/sesame-crusted-tuna-steaks-recipe2.jpg"
    }

]

export default recipes;