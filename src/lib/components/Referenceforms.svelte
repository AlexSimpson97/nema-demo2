<script lang="ts">
	import { onMount } from 'svelte';
	
	
	let refEmail = '';
	let refName = '';
	let applicantName = '';
	let position = '';
	let pdf: any;
	let attachment: any;
	// export let form: any;
	
	
	const handleSubmit = async (event: Event) => {
		event.preventDefault();
	
		const createPDF = async () => {
			const element = document.getElementById('tojsPDF');
			const pdfAttachment = await pdf(element).output("datauristring");
			// alert(pdfAttachment);
	
			return pdfAttachment;
		}
	
		attachment = await createPDF();
	
		
		// Create a new FormData
		const formData = new FormData();
	
		// Append the form data to the form
		formData.append('refEmail', refEmail);
		formData.append('refName', refName);
		formData.append('applicantName', applicantName);
		formData.append('position', position);
		formData.append('attachment', attachment);
	
		// Send the form data to the server
		const response = await fetch('/admin/references', {
			method: 'POST',
			body: formData,
		});
	
		console.log(response.statusText);
		
	};
	
	
	onMount(async () => {
		// Add any setup code here
		pdf = (await import('html2pdf.js')).default;
	});
	</script>
	
	<div class="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-12 mx-auto text-zinc-700 rounded-lg">
		<div class="flex flex-col justify-center">
			<div>
				<h2 class="text-4xl lg:text-5xl font-bold leading-tight">
					Reference Form
				</h2>
				<div class="text-zinc-700 mt-8">
					Problems filling out the form? Send us an
					<a class="underline" href="mailto:alexandersimpson65.ts@gmail.com">
						email
					</a>
					instead.
				</div>
			</div>
			<div class="mt-12 text-center">
				<img src="/sololearning.svg" alt="Contact" width="500" height="300" />
			</div>
		</div>
		<form method="POST"  on:submit={handleSubmit} enctype="multipart/form-data" class={`px-5`}  >
			<div>
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Referrer's Email
				</span>
				<input
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					type="email"
					placeholder="Contact@company.com"
					bind:value={refEmail}
					name="refEmail"
					required
				/>
			</div>
			<div class="mt-8">
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Referrer's Name
				</span>
				<input
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					type="text"
					placeholder="Enter the name of the individual giving the reference"
					bind:value={refName}
					name="refName"
					required
				/>
			</div>
			<div class="mt-8">
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Name of the applicant
				</span>
				<input
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					type="text"
					placeholder="Enter applicant name"
					bind:value={applicantName}
					name="applicantName"
					required
				/>
			</div>
			<div class="mt-8">
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Position
				</span>
				<textarea
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					placeholder="Enter applicants position"
					bind:value={position}
					name="position"
					required
				></textarea>
			</div>
			<div class="mt-8">
				<button
					class="uppercase text-sm font-bold tracking-wide bg-green-600 text-zinc-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-green-700"
					type="submit"
				>
					Submit reference
				</button>
			</div>
			<div class={`mt-8 hidden`}  >
				<input type="file" name="file" id="file" />
			</div>
		</form>
		<!-- <p class="success">{form?.success || ""}</p> -->
	</div>
	
	
	<section class={`hidden`}  >
		<section  id={`tojsPDF`} class={`px-5`}  >
			<div>
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Referrer's Email
				</span>
				<input
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					type="email"
					placeholder="Contact@company.com"
					bind:value={refEmail}
					required
				/>
			</div>
			<div class="mt-8">
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Referrer's Name
				</span>
				<input
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					type="text"
					placeholder="Enter the name of the individual giving the reference"
					bind:value={refName}
					required
				/>
			</div>
			<div class="mt-8">
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Name of the applicant
				</span>
				<input
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					type="text"
					placeholder="Enter applicant name"
					bind:value={applicantName}
					required
				/>
			</div>
			<div class="mt-8">
				<span class="uppercase text-sm text-zinc-600 font-bold">
					Position
				</span>
				<textarea
					class="w-full bg-zinc-100 text-zinc-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
					placeholder="Enter applicants position"
					bind:value={position}
					required
				></textarea>
			</div>
		</section>
	</section>