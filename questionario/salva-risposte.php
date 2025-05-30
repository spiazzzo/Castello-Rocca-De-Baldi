<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Pulizia e acquisizione dei dati
    $nome = htmlspecialchars(trim($_POST["nome"] ?? ''));
    $eta = htmlspecialchars(trim($_POST["eta"] ?? ''));
    $piaciuto = htmlspecialchars(trim($_POST["piaciuto"] ?? ''));
    $commenti = htmlspecialchars(trim($_POST["commenti"] ?? ''));

    // Costruisci la stringa da salvare
    $dati = "Nome: $nome\nEtà: $eta\nPiaciuto: $piaciuto\nCommenti: $commenti\n---\n";

    // Nome del file in cui salvare le risposte
    $file = "risposte_questionario.txt";

    // Scrivi nel file
    if (file_put_contents($file, $dati, FILE_APPEND | LOCK_EX)) {
        echo "<h2>Grazie per aver compilato il questionario, $nome!</h2>";
        echo "<p>Le tue risposte sono state registrate correttamente.</p>";
        echo "<a href='questionario.html'>Torna al questionario</a>";
    } else {
        echo "<h2>Errore nel salvataggio delle risposte.</h2>";
    }
} else {
    echo "<h2>Accesso non autorizzato.</h2>";
}
?>
