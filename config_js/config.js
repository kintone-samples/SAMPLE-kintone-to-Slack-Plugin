/*
 * SAMPLE-kintone-to-Slack-Plugin Program
 * Copyright (c) 2025 Cybozu
 *
 * Licensed under the MIT License
 * https://opensource.org/license/mit/
 */

((PLUGIN_ID) => {
  'use strict';

    const submitButton = document.getElementById('submit');
    const cancelButton = document.getElementById('cancel');
    const apiTokenInput = document.getElementById('apitoken');

    submitButton.addEventListener('click', () => {
      const apitoken = apiTokenInput.value;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apitoken}`
      };

      kintone.plugin.app.setProxyConfig(
        'https://slack.com/api/chat.postMessage',
        'POST',
        headers,
        {}
      );
    });

    cancelButton.addEventListener('click', () => {
      history.back();
    });

})(kintone.$PLUGIN_ID);
