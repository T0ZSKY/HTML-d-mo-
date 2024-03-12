// Récupérer tous les lecteurs audio
var allAudios = document.querySelectorAll('.container-audio audio');

// Fonction pour arrêter toutes les musiques sauf celle spécifiée et cacher tous les lecteurs audio sauf celui en cours de lecture
function stopAllAudiosExceptAndHideOthers(exceptAudio) {
    allAudios.forEach(function(audio) {
        if (audio !== exceptAudio && !audio.paused) {
            audio.pause(); // Pause la lecture de la musique
            audio.currentTime = 0; // Réinitialise la position de lecture à 0
        }
    });

    allAudios.forEach(function(audio) {
        if (audio !== exceptAudio) {
            audio.style.display = 'none'; // Cacher le lecteur audio
        }
    });
}

// Ajouter des écouteurs d'événements aux boutons pour rendre les lecteurs audio visibles et jouer les sons correspondants
document.getElementById('btn-pop').addEventListener('click', function() {
    var audioPop = document.getElementById('pop');
    stopAllAudiosExceptAndHideOthers(audioPop); // Arrêter toutes les autres musiques et cacher leurs lecteurs audio
    audioPop.style.display = 'block'; // Rendre le lecteur audio visible
    audioPop.play(); // Lancer la lecture
});

document.getElementById('btn-deep-house-1').addEventListener('click', function() {
    var audioDeepHouse1 = document.getElementById('deep-house-1');
    stopAllAudiosExceptAndHideOthers(audioDeepHouse1); // Arrêter toutes les autres musiques et cacher leurs lecteurs audio
    audioDeepHouse1.style.display = 'block'; // Rendre le lecteur audio visible
    audioDeepHouse1.play(); // Lancer la lecture
});

document.getElementById('btn-deep-house-2').addEventListener('click', function() {
    var audioDeepHouse2 = document.getElementById('deep-house-2');
    stopAllAudiosExceptAndHideOthers(audioDeepHouse2); // Arrêter toutes les autres musiques et cacher leurs lecteurs audio
    audioDeepHouse2.style.display = 'block'; // Rendre le lecteur audio visible
    audioDeepHouse2.play(); // Lancer la lecture
});

document.getElementById('btn-edm').addEventListener('click', function() {
    var audioEDM = document.getElementById('edm');
    stopAllAudiosExceptAndHideOthers(audioEDM); // Arrêter toutes les autres musiques et cacher leurs lecteurs audio
    audioEDM.style.display = 'block'; // Rendre le lecteur audio visible
    audioEDM.play(); // Lancer la lecture
});


