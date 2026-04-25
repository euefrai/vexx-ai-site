# Pasta de instaladores do Vexx-AI

O site espera o arquivo:

    public/downloads/Vexx-AI-Setup.exe

Esse arquivo deve ser o instalador gerado pelo projeto irmão `very`.

## Como gerar o instalador

1. No projeto `very`, gere o build do app:

       cd C:\Users\efrai\Documents\very
       python build_app.py

2. Compile o instalador com Inno Setup usando `scripts/inno_setup.iss`.
   A saída fica em `very/dist/YUI-JUH_Installer.exe`.

3. Copie/renomeie esse arquivo para cá:

       copy "C:\Users\efrai\Documents\very\dist\YUI-JUH_Installer.exe" ^
            "C:\Users\efrai\Documents\site_ensin\public\downloads\Vexx-AI-Setup.exe"

Após isso, todos os botões "Baixar para Windows" / "Baixar Vexx agora"
servirão o `.exe` diretamente.
