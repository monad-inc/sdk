# ModelsTemplateSettings

TemplateSettings is present iff this component is a template: it carries the lock allow-list for per-pipeline overrides (RFC 0017 §2).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overridable_paths** | **List[str]** | OverridablePaths is the allow-list of config paths a pipeline may override (nested paths at any depth, subtree inheritance); everything else is locked. Empty/absent means fully locked. | [optional] 

## Example

```python
from monad.models.models_template_settings import ModelsTemplateSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTemplateSettings from a JSON string
models_template_settings_instance = ModelsTemplateSettings.from_json(json)
# print the JSON string representation of the object
print(ModelsTemplateSettings.to_json())

# convert the object into a dict
models_template_settings_dict = models_template_settings_instance.to_dict()
# create an instance of ModelsTemplateSettings from a dict
models_template_settings_from_dict = ModelsTemplateSettings.from_dict(models_template_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


