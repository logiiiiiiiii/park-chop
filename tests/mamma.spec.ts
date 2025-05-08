import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

const pass = process.env.PW as string;
const email = process.env.EMAIL as string;

test('test', async ({ page }) => {
  await page.goto('https://smartoblat.trondheimparkering.no/accounts/login/?next=/mypermits/1388750');
  await page.getByLabel('Brukernavn*').click();
  await page.getByLabel('Brukernavn*').fill(email);
  await page.getByLabel('Brukernavn*').press('Tab');
  await page.getByLabel('Passord*').fill(pass);
  await page.getByLabel('Passord*').press('Enter');
  await page.getByRole('button', { name: 'Legg til kjøretøy' }).click();
  await page.getByPlaceholder('Registreringsnummer').click();
  await page.getByPlaceholder('Registreringsnummer').fill('VF53229');
  await page.getByPlaceholder('Epost for kontakt').press('ControlOrMeta+a');
  await page.getByPlaceholder('Epost for kontakt').fill('marius.j.nilsen@gmail.com');
  await page.getByRole('button', { name: 'Legg til', exact: true }).click();
});
