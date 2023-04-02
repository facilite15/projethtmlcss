function afficher(){
    FenetreAffichage.document.write("souvenez vous de vos informATIONS");
    FenetreAffichage = window.open(('',NouvelleFenetre), 'toolbar=no,statuts=no, width=300, height200');
    FenetreAffichage.document.write("vous etes connnecter autant que " +document.formulaire.n1);
    FenetreAffichage.document.write("votre email est" +document.formulaire.email);
    FenetreAffichage.document.write("votre mot de passe est " +document.formulaire.passe1);
}<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>





<script src="function.js"></script>


     <script>
            function terminer(formulaire) {
                if(formulaire.check.checked == true) { formulaire.sub.disable = false}
                if(formulaire.check.checked == false){
                    formulaire.sub.disable =true }
            }


     </script>