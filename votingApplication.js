const readline = require('readline');

const MAX_CANDIDATES = 4;

// Structure to hold candidate information
class Candidate {
    constructor(name) {
        this.name = name;
        this.votes = 0;
    }
}

// Function to initialize candidates
function initializeCandidates() {
    return [
        new Candidate("Ajay"),
        new Candidate("Rohit"),
        new Candidate("Shivendra"),
        new Candidate("Ravi")
    ];
}

// Function to display candidates
function displayCandidates(candidates) {
    console.log("\nList of Candidates Vote                      (s)");
    console.log("------------------------------------------------\n");
    candidates.forEach((candidate, i) => {
        console.log(`[${i}] > ${candidate.name.padEnd(20, ' ')} ${candidate.votes}`);
    });
}

function main() {
    // Initialize candidates
    const candidates = initializeCandidates();

    // Display the voting box
    console.log("+----------------------------------------------+");
    console.log("|         >>    Vote for your CR    <<         |");
    console.log("+----------------------------------------------+\n");

    // Display the list of candidates
    displayCandidates(candidates);

    // Create an interface for reading input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Function to prompt user for vote
    function promptVote() {
        rl.question('\nPress respective key to vote ::\n', (choice) => {
            // Convert character choice to integer index
            const index = parseInt(choice, 10);

            // Check if index is valid
            if (index >= 0 && index < MAX_CANDIDATES) {
                // Increase the vote count for the selected candidate
                candidates[index].votes++;

                // Clear the screen (emulate by adding many new lines)
                console.clear();

                // Display the voting box
                console.log("+----------------------------------------------+");
                console.log("|         >>    Vote for your CR    <<         |");
                console.log("+----------------------------------------------+\n");

                // Display updated candidates
                displayCandidates(candidates);
            } else {
                console.log("Invalid choice. Please try again.");
            }

            // Prompt user for vote again
            promptVote();
        });
    }

    // Start the voting prompt
    promptVote();
}

// Run the main function
main();