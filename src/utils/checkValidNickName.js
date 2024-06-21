export default function checkValidNickName(nickname) {
    const containerValid = document.getElementById('container-valid');
    const checkValid = document.getElementById('check-valid');
    // if nickname have length > 0 we will apply function
    if (nickname.value.length > 0) {
        containerValid.classList.remove('hidden');
        containerValid.classList.add('flex');
        checkValid.classList.remove('hidden');
        checkValid.classList.add('block');
        const arrNickname = nickname.value.split("");
        if (arrNickname.includes(" ")) {
            checkValid.innerHTML = 'Invalid nickname';
            checkValid.classList.add('text-red-500');
            checkValid.classList.remove('text-green-500');
        }
        else {
            checkValid.innerHTML = 'Valid nickname';
            checkValid.classList.remove('text-red-500');
            checkValid.classList.add('text-green-500');
        }
    }
    // else we hide all
    else if (nickname.value.length === 0) {
        containerValid.classList.add('hidden');
        containerValid.classList.remove('flex');
        checkValid.classList.add('hidden');
        checkValid.classList.remove('block');
    }
}