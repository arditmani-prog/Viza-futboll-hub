Import { supabase } from ‘./supabaseClient.js’;

Const form = document.getElementById(‘playerForm’);
Const statusMessage = document.getElementById(‘statusMessage’);

Form.addEventListener(‘submit’, async (e) =&gt; {
e.preventDefault();

const fullName = document.getElementById(‘fullName’).value;
const position = document.getElementById(‘position’).value;
const age = document.getElementById(‘age’).value;
const phone = document.getElementById(‘phone’).value;

statusMessage.innerText = ‘Duke dërguar të dhënat...’;
statusMessage.style.color = ‘#333’;

// Ruajtja në tabelën ‘profiles’ në Supabase
Const { data, error } = await supabase
.from(‘profiles’)
.insert([
{
Full_name: fullName,
Position: position,
Age: parseInt(age),
Phone_number: phone
}
]);

If (error) {
statusMessage.innerText = ‘Gabim gjatë dërgimit: ‘ + error.message;
statusMessage.style.color = ‘red’;
} else {
statusMessage.innerText = ‘Aplikimi u dërgua me sukses!’;
statusMessage.style.color = ‘green’;
form.reset();
}
});

&lt;div class=”form-container”&gt;
&lt;h2&gt;Regjistrimi i Lojtarit&lt;/h2&gt;
&lt;form id=”playerForm”&gt;
&lt;input type=”text” id=”fullName” placeholder=”Emri dhe Mbiemri” required&gt;
&lt;input type=”text” id=”position” placeholder=”Pozicioni (p.sh. Sulmues, Mesfushor)”
required&gt;
&lt;input type=”number” id=”age” placeholder=”Mosha” required&gt;
&lt;input type=”tel” id=”phone” placeholder=”Numri i Telefonit” required&gt;
&lt;button type=”submit”&gt;Dërgo Aplikimin&lt;/button&gt;
&lt;/form&gt;
&lt;p id=”statusMessage”&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;script type=”module” src=”app.js”&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
