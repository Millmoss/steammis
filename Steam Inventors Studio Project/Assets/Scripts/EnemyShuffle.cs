using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyShuffle : MonoBehaviour
{

    private Vector3 _startPosition;

    void OnTriggerEnter(Collider Other)
    {
        Destroy(gameObject);

    }

        void Start()
    {
        _startPosition = transform.position;
    }

    void Update()
    {
        transform.position = _startPosition + new Vector3(0f, 0f, Mathf.Sin(Time.time)*2.5f);
    }
}
