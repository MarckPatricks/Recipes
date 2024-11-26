const recetas = [
    {
        "id": 1,
        "name": "Ensalada César",
        "image": "https://example.com/ensalada.jpg",
        "ingredients": ["Lechuga", "Pollo", "Queso parmesano", "Aderezo César"],
        "nutrition": {
            "calories": 250,
            "fat": 12,
            "carbs": 8,
            "protein": 25
        }
    },
    {
        "id": 2,
        "name": "Tacos de Pollo",
        "image": "https://example.com/tacos.jpg",
        "ingredients": ["Tortillas de maiz", "Pollo", "Cebolla", "Salsa"],
        "nutrition": {
            "calories": 350,
            "fat": 18,
            "carbs": 30,
            "protein": 22
        }
    },
    {
        "id": 3,
        "name": "Sopa de Jitomate",
        "image": "https://example.com/sopa.jpg",
        "ingredients": ["Jitomate", "Cebolla", "Ajo", "Aceite de oliva", "Sal"],
        "nutrition": {
            "calories": 150,
            "fat": 8,
            "carbs": 18,
            "protein": 3
        }
    },
    {
        "id": 4,
        "name": "Nopales con chorizo",
        "image": "https://example.com/nopales.jpg",
        "ingredients": ["Cebolla blanca", "Nopales cocidos", "Tortillas de maiz", "Aceite de canola", "Chorizo de res cocido"],
        "nutrition": {
            "calories": 331,
            "fat": 15,
            "carbs": 37,
            "protein": 12
        }
    },
    {
        "id": 5,
        "name": "Toast de queso cottage con fresa",
        "image": "https://example.com/toast.jpg",
        "ingredients": ["Pan tostado", "Queso cottage", "Miel", "Fresas", "Almendra"],
        "nutrition": {
            "calories": 275,
            "fat": 7,
            "carbs": 36,
            "protein": 18
        }
    },
    {
        "id": 6,
        "name": "Ensalada de garbanzo y pechuga de pollo a la plancha",
        "image": "https://example.com/ensalada_garbanzo.jpg",
        "ingredients": ["Garbanzos cocidos", "Pepino pelado", "Jitomate bola", "Cebolla blanca", "Fajita de pollo", "Aceite de oliva", "Pimiento rojo o verde", "Pimienta negra", "Sanissimo"],
        "nutrition": {
            "calories": 702,
            "fat": 14,
            "carbs": 94,
            "protein": 50
        }
    },
    {
        "id": 7,
        "name": "Costillas de cerdo con calabacitas y queso",
        "image": "https://example.com/costillas.jpg",
        "ingredients": ["Costillas de cerdo", "Calabacita italiana", "Jitomate bola", "Cebolla blanca", "Elote", "Ajo", "Pimiento morrón", "Aceite de canola", "Aguacate", "Tortilla de maiz"],
        "nutrition": {
            "calories": 750,
            "fat": 46,
            "carbs": 48,
            "protein": 36
        }
    },
    {
        "id": 8,
        "name": "Morisqueta con verduras salteadas",
        "image": "https://example.com/morisqueta.jpg",
        "ingredients": ["Frijoles cocidos sin grasa", "Arroz blanco cocido", "Crema agria light", "Calabacita italiana", "Jitomate bola", "Cebolla blanca", "Aguacate"],
        "nutrition": {
            "calories": 335,
            "fat": 7,
            "carbs": 54,
            "protein": 14
        }
    },
    {
        "id": 9,
        "name": "Chuleta de puerco encebollada",
        "image": "https://example.com/chuleta.jpg",
        "ingredients": ["Chuletas de cerdo sin hueso", "Cebolla blanca", "Aguacate", "Ajo", "Brócoli cocido", "Aceite de canola", "Arroz blanco cocido"],
        "nutrition": {
            "calories": 475,
            "fat": 19,
            "carbs": 45,
            "protein": 31
        }
    },
    {
        "id": 10,
        "name": "Huevo a la mexicana",
        "image": "https://example.com/huevo.jpg",
        "ingredients": ["Huevo entero fresco", "Jitomate bola", "Cebolla blanca", "Aceite de canola", "Frijoles refritos peruanos", "Tortilla de maiz", "Espinaca cruda"],
        "nutrition": {
            "calories": 563,
            "fat": 27,
            "carbs": 52,
            "protein": 28
        }
    }
];


function buscarRecetas() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const recetasList = document.getElementById('recetas-list');

    // Limpiar resultados previos
    recetasList.innerHTML = '';

    if (!searchTerm) {
        alert("Por favor ingrese un término de búsqueda.");
        return;
    }

    // Filtrando las recetas por nombre o ingrediente
    const filteredRecetas = recetas.filter(receta => {
        const nombreCoincide = receta.name.toLowerCase().includes(searchTerm);
        const ingredientesCoinciden = receta.ingredients.some(ingrediente =>
            ingrediente.toLowerCase().includes(searchTerm)
        );
        return nombreCoincide || ingredientesCoinciden;
    });

    if (filteredRecetas.length > 0) {
        filteredRecetas.forEach((receta) => {
            const recetaElement = document.createElement('div');
            recetaElement.classList.add('receta');
            recetaElement.innerHTML = `
                <h3>${receta.name}</h3>
                <img src="${receta.image}" alt="${receta.name}" />
                <p><strong>Ingredientes:</strong> ${receta.ingredients.join(', ')}</p>
                <button class="nutrition-btn" onclick="mostrarInformacionNutricional(${receta.id})">Ver Información Nutricional</button>
                <div id="nutrientes-${receta.id}" class="nutrientes"></div>
            `;
            recetasList.appendChild(recetaElement);
        });
    } else {
        recetasList.innerHTML = '<p>No se encontraron recetas.</p>';
    }
}

function mostrarInformacionNutricional(id) {
    const receta = recetas.find(r => r.id === id);
    const nutrientesDiv = document.getElementById(`nutrientes-${id}`);

    if (receta) {
        nutrientesDiv.innerHTML = `
            <h4>Información Nutricional</h4>
            <p>Calorías: ${receta.nutrition.calories} kcal</p>
            <p>Grasas: ${receta.nutrition.fat} g</p>
            <p>Carbohidratos: ${receta.nutrition.carbs} g</p>
            <p>Proteínas: ${receta.nutrition.protein} g</p>
        `;
    }
}
