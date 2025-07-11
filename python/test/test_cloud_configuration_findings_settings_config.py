# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.cloud_configuration_findings_settings_config import CloudConfigurationFindingsSettingsConfig

class TestCloudConfigurationFindingsSettingsConfig(unittest.TestCase):
    """CloudConfigurationFindingsSettingsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CloudConfigurationFindingsSettingsConfig:
        """Test CloudConfigurationFindingsSettingsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CloudConfigurationFindingsSettingsConfig`
        """
        model = CloudConfigurationFindingsSettingsConfig()
        if include_optional:
            return CloudConfigurationFindingsSettingsConfig(
                endpoint_url = '',
                result = [
                    ''
                    ],
                severity = [
                    ''
                    ],
                status = [
                    ''
                    ]
            )
        else:
            return CloudConfigurationFindingsSettingsConfig(
        )
        """

    def testCloudConfigurationFindingsSettingsConfig(self):
        """Test CloudConfigurationFindingsSettingsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
