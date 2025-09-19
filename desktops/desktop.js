/*
 * SAMPLE-kintone-to-Slack-Plugin Program
 * Copyright (c) 2025 Cybozu
 *
 * Licensed under the MIT License
 * https://opensource.org/license/mit/
 */

((PLUGIN_ID) => {
  'use strict';

  const submitEvent = [
    'app.record.edit.submit',
    'app.record.create.submit',
    'app.record.index.edit.submit'
  ];
  kintone.events.on(submitEvent, (event) => {
    const URL = 'https://slack.com/api/chat.postMessage';
    const record = event.record;
    const channel = record.channel.value;
    const text = record.text.value;
    const body = {
      channel: channel,
      text: text,
      as_user: true
    };
  
    kintone.plugin.app.proxy(PLUGIN_ID, URL, 'POST', {}, body, (response, status, headers) => {
    }, (error) => {
      console.log(error);
    });
    return event;
  });
})(kintone.$PLUGIN_ID);
