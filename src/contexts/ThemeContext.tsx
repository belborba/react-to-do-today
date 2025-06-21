// Criar o Contexto e o Provider no mesmo documento.
// Vamos criar um Hook para facilitar o uso do contexto.
// Vamos usar o localStorage para persistir esses dados no navegador.

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// 1. Para armazenar os dados em localStorage precisamos criar um key do localStorage
const STORAGE_KEY = "themeContextKey";

//2. Criar contexto que vai aramazenar os dados que precisam ser repassados.

/* ThemeContext vai precisar receber dados de um useState,
já que vamos precisar alterar o estado para funcionar*/
type ThemeContext = {
  theme: string;
  setTheme: (newTheme: string) => void; // Precisa receber como parâmetro o valor do tema.
};

export const ThemeContext = createContext<ThemeContext | null>(null); // Passamos o tipo de um hook nativo por <> (Generic Type Argument)
// Inicialmente, o contexto geralmente é null, e depois é atribuído com o valor real via Provider.

//3.Criar o Provider que vai passar os dados de ThemeContext
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const initialTheme = localStorage.getItem(STORAGE_KEY) || "dark";

  const [theme, setTheme] = useState<string>(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); //Hook para usar o Contexto

// Recebe children como Prop -> Children é uma Prop especial que representa tudo que está dentro do componente.
// O valor inicial de theme será o que está armazenado dentro do localStoage ou se inicia com o tema dark.
// É preciso usar um Effect para realizar uma ação de após alterar o valor de theme ser armazenado no localStorage
// O provider recebe os valores de theme e setTheme.

//O valor de useState pode iniciar como um valor null porém o valor de theme foi tipado como string
//Precisamos tipar o valor que o useState vai receber (theme) como string.

// A razão de usar uma função dentro do useState é performance
// Essa função só vai ser executada uma única vez, na primeira renderização.
/*
se não usa a função dentro do useState o localStorage.getItem vai ser executado toda vez que o
componente for recriado (mesmo que o React nem use o valor depois).
*/

/*
Vamos precisar que o contexto manipule a class de html do tailwind.
Parar de verificar o sistema operacional.
*/
