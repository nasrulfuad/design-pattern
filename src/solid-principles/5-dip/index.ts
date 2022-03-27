import { BackendDeveloper, FrontendDeveloper } from "./dip.good";
import { SoftwareProject } from "./dip.good";

/**
 * Dependency Inversion Principle
 * Depend upon abstractions, [not] concretions
 *
 * Prinsip yang menyatakan bahwa sebuah entitas itu bergantung pada abstraksi.
 * Sehingga sebuah modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah,
 * tetapi bergantung kepada abstraksi.
 * - Modul level-tinggi (high-level) adalah interface atau abstraksi yang dikonsumsi secara langsung oleh kelas - kelas eksekutor atau user interface
 * - Modul level-rendah (low-level) adalah kumpulan dari beberapa modul kecil (subsystem) yang membantu modul level-tinggi dalam proses pekerjaannya.
 */
export default function () {
  const frontendDeveloper = new FrontendDeveloper();
  const backendDeveloper = new BackendDeveloper();

  const softwareProject = new SoftwareProject([
    frontendDeveloper,
    backendDeveloper,
  ]);

  softwareProject.startDevelopment();
}
