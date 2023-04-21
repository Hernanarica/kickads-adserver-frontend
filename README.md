
# React Auth0 Google




## Correr localmente

Clonar repositorio

```bash
  git clone git@github.com:Hernanarica/react-0auth-google-auth.git
```

Ir a la carpeta de proyecto

```bash
  cd my-project
```

Crear el archivo .env de .env.example y agregar las variables obligatorias

```bash
  cp .env.example .env
```

Correr Dockerfile (antes completar archivo .env)

```bash
  docker build -t [your-custom-image-name] .
```

Correr contenedor de Docker (antes correr Dockerfile)

```bash
  docker container run --name [your-custom-container-name] -dp [your-curtom-port]:3001 [your-custom-image-name]
```

    
## Environment Variables

`VITE_GOOGLE_CLIENT_ID=`

