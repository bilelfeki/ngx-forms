
# Form Builder Architecture

This project is designed to create and preview forms dynamically based on a JSON configuration. The architecture is built using Angular components and models, along with JSON-driven configuration files.

## Project Structure

The following key components make up the architecture:

### 1. ngxFormBuilder
- **Purpose:** Responsible for initiating the form-building process.
- **Components:**
  - `ngxInputBuilder`: Component that dynamically creates form inputs based on the configuration in `ngx-form.json`.

### 2. ngx-form.json
- **Purpose:** JSON file containing the configuration for the form. It specifies the structure and properties of each form input.
- **Structure:**
  ```json
  {
    "form": {
      "input": [],
      "config": {
        // configuration settings
      }
    }
  }
  ```

### 3. Form Generator (ngxFormGenerator)
- **Purpose:** Processes the form configuration and generates the necessary components for rendering the form.
- **Components:**
  - `formulaire.ts`: Contains the logic for creating the form structure and managing form data.
  - `formulaire.html`: Template for rendering the form.

### 4. ngxFormPreview
- **Purpose:** Component responsible for displaying a preview of the generated form.
- **Usage:** After form creation, the preview displays the form with all its configured inputs and settings.

### 5. ngxFormLib
- **Purpose:** A library containing shared components and models used across the form-building system.
- **Components:**
  - **Components:**
    - `NgxInput.ts`: Represents an input component for the form. This component uses configurations from `ngx-form.json` to dynamically render form inputs.
  - **Models:**
    - `NgxInputConfig.ts`: Model that defines the configuration schema for form inputs, such as input type, placeholder text, validations, etc.

## Workflow

1. **Configuration Loading:** The JSON configuration from `ngx-form.json` is loaded by `ngxFormBuilder`.
2. **Form Generation:** `ngxFormGenerator` uses the configuration data to create the form structure. The generated form is represented by `formulaire.ts` (logic) and `formulaire.html` (view).
3. **Component Creation:** Based on the configuration, `NgxInput` components are instantiated dynamically with configurations specified in `NgxInputConfig`.
4. **Form Preview:** `ngxFormPreview` displays a preview of the form, allowing users to see the form layout and test the inputs.
5. **Rendering:** The form is rendered with `<ngx-form>` and `<ngx-input>` components, configured based on JSON data.


This architecture provides a modular and scalable way to create forms dynamically based on JSON configurations, allowing easy customization and previewing of forms.
