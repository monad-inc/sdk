# CloudflareFirewallEventsSecretsConfig

Cloudflare Firewall Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.cloudflare_firewall_events_secrets_config import CloudflareFirewallEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudflareFirewallEventsSecretsConfig from a JSON string
cloudflare_firewall_events_secrets_config_instance = CloudflareFirewallEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudflareFirewallEventsSecretsConfig.to_json())

# convert the object into a dict
cloudflare_firewall_events_secrets_config_dict = cloudflare_firewall_events_secrets_config_instance.to_dict()
# create an instance of CloudflareFirewallEventsSecretsConfig from a dict
cloudflare_firewall_events_secrets_config_from_dict = CloudflareFirewallEventsSecretsConfig.from_dict(cloudflare_firewall_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


